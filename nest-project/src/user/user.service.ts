import {Injectable} from '@nestjs/common';
import {UpdateUserDto} from './dto/update-user.dto';
import {PrismaService} from "../core/prisma.service";
import {Prisma, User} from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {
    }

    getAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    getOneUserById(userId: string) {
        return this.prismaService.user.findFirst({
            where: {id: Number(userId)}
        })
    }

    createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prismaService.user.create({
            data,
        });
    }

    updateUser(data: UpdateUserDto, userId: string) {
        return this.prismaService.user.update({
            where: {id: Number(userId)},
            data: {
                username: data.username,
                age: data.age,
                status: data.status,
            }
        })
    }

    deleteUserById(userId: string) {
         this.prismaService.user.delete({
            where: {id: Number(userId)}
        })

        return 'User Deleted';
    }
}
