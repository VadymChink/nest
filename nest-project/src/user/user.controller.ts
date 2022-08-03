import {Body, Controller, Delete, Get, Param, Post, Put, UseGuards} from '@nestjs/common';

import {UserService} from "./user.service";
import {CreateUserDto, UpdateUserDto} from "./dto";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    // @UseGuards(JwtAuthGuard)
    @Get()
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get('/:id')
    getOneUserById(@Param('id') id: string) {
        return this.userService.getOneUserById(id)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Put('/:id')
    updateUser(@Body() data: UpdateUserDto, @Param('id') id: string) {
        return this.userService.updateUser(data, id);
    }

    @Delete('/:id')
    deleteById(@Param('id') id: string) {
        return this.userService.deleteUserById(id);
    }
}
