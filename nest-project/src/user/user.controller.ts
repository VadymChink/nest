import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

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
