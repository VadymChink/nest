import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiBody,
    ApiOkResponse,
    ApiOperation, ApiParam,
    ApiTags
} from "@nestjs/swagger";

import {UserService} from "./user.service";
import {CreateUserDto, UpdateUserDto} from "./dto";
import {JwtAuthGuard} from "../auth/jwt-auth-guard";
import {CustomOkResponse} from "../core/swagger/swagger.helper";
import {
    SWAGGER_EXAMPLE_CREATE_USER,
    SWAGGER_EXAMPLE_CREATE_USERS,
    SWAGGER_EXAMPLE_REGISTER_USER_BadRequest
} from "../core/swagger/example/user.list";

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    // @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({
        summary: 'Find all users',
        description: 'This method get all users'
    })
    @CustomOkResponse({exampleData: SWAGGER_EXAMPLE_CREATE_USERS})
    @ApiBadRequestResponse({})
    getAllUsers() {
        return this.userService.getAll();
    }

    @Get('/:id')
    @ApiOperation({
        summary: 'Find One users',
        description: 'This method get user'
    })
    @ApiParam({name: 'id', type: 'string'})
    getOneUserById(@Param('id') id: string) {
        return this.userService.getOneUserById(id)
    }

    @Post()
    @ApiOperation({
        summary: 'Create user',
        description: 'This method created user'
    })
    @ApiBody({type: CreateUserDto})
    @CustomOkResponse({exampleData: SWAGGER_EXAMPLE_CREATE_USER})
    @ApiBadRequestResponse({
        description: 'Error:  BadRequest',
        status: 400,
        schema: {
            type: 'object',
            example: SWAGGER_EXAMPLE_REGISTER_USER_BadRequest
        }
    })
    createUser(@Body() user: CreateUserDto) {
        return this.userService.createUser(user);
    }

    @Put('/:id')
    @ApiOperation({
        summary: 'Update user',
        description: 'This method Updated user'
    })
    @CustomOkResponse({exampleData: SWAGGER_EXAMPLE_CREATE_USER})
    @ApiParam({name: 'id', type: 'string'})
    updateUser(@Body() data: UpdateUserDto, @Param('id') id: string) {
        return this.userService.updateUser(data, id);
    }

    @Delete('/:id')
    @ApiOperation({
        summary: 'Delete user',
        description: 'This method Deleted user'
    })
    @ApiParam({name: 'id', type: 'string'})
    @ApiOkResponse({
        description: 'User deleted'
    })
    async deleteById(@Param('id') id: string) {
        await this.userService.deleteUserById(id);
        return 'User deleted';
    }
}
