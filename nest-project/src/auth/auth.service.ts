import {HttpException, HttpStatus, Injectable, UnauthorizedException} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {User} from "@prisma/client";
import * as bcryptjs from 'bcryptjs'

import {LoginUserDto, RegisterUserDto} from "./dto";
import {UserService} from "../user/user.service";

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService, private userService: UserService) {
    }

    async login(authUser: LoginUserDto) {
        const user = await this.validateUser(authUser);
        const token = await this.generateToken(user);
        return {
            user,
            token
        }
    }

    async registration(registerUser: RegisterUserDto) {
        const findUser = await this.userService.getOneUserByEmail(registerUser.email)

        if (findUser) {
            throw new HttpException('User is already exist', HttpStatus.BAD_REQUEST);
        }

        const hashPass = await bcryptjs.hash(registerUser.password, 10)
        const user = await this.userService.createUser({
            ...registerUser,
            password: hashPass,
        })
        const token = await this.generateToken(user);
        return {
            user,
            token
        }
    }

    private async validateUser(user: LoginUserDto) {
        const userDB = await this.userService.getOneUserByEmail(user.email);
        const passEqual = await bcryptjs.compare(user.password, userDB.password);

        if (userDB && passEqual) {
            return userDB
        }

        throw new UnauthorizedException({message: 'Wrong email or password'});
    }

    private async generateToken(user: User) {
        const payload = {email: user.email, name: user.username, id: user.id};
        return {
            token: this.jwtService.sign(payload, {secret: 'secret', expiresIn: '21h'}),
        }
    }
}
