import {Body, Controller, Post} from '@nestjs/common';

import {AuthService} from "./auth.service";
import {LoginUserDto, RegisterUserDto} from "./dto";
import {ApiBadRequestResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse} from "@nestjs/swagger";
import {CustomOkResponse} from "../core/swagger/swagger.helper";
import {
    SWAGGER_EXAMPLE_CREATE_USER,
    SWAGGER_EXAMPLE_LOGIN_USER,
    SWAGGER_EXAMPLE_REGISTER_USER_BadRequest
} from "../core/swagger/example/user.list";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('/login')
    @ApiOperation({
        summary: 'Login user',
        description: 'This method authorizes the user'
    })
    @CustomOkResponse({exampleData: SWAGGER_EXAMPLE_LOGIN_USER})
    @ApiUnauthorizedResponse({
        status: 401,
        schema: {
            type: 'object',
            example: {
                message: "Wrong email or password"
            }
        }

    })

    login(@Body() loginUser: LoginUserDto) {
        return this.authService.login(loginUser);
    }

    @Post('/registration')
    @ApiOperation({
        summary: 'Register user',
        description: 'This method Registered user'
    })
    @ApiOkResponse({
        status: 200,
        schema: {
            type: 'object',
            example: SWAGGER_EXAMPLE_CREATE_USER
        }
    })
    @ApiBadRequestResponse({
        status: 400,
        schema: {
            type: 'array',
            example: SWAGGER_EXAMPLE_REGISTER_USER_BadRequest
        }
    })

    registerUser(@Body() registerUser: RegisterUserDto) {
        return this.authService.registration(registerUser);
    }
}
