import {Body, Controller, Post} from '@nestjs/common';

import {AuthService} from "./auth.service";
import {LoginUserDto, RegisterUserDto} from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/login')
    login(@Body() loginUser: LoginUserDto) {
        return this.authService.login(loginUser);
    }

    @Post('/registration')
    registerUser(@Body() registerUser: RegisterUserDto) {
        return this.authService.registration(registerUser);
    }
}
