import {IsEmail, IsString, Matches} from "class-validator";

import {regEx} from '../../../const'
import {ApiProperty} from "@nestjs/swagger";

export class LoginUserDto {

    @ApiProperty()
    @IsString()
    @IsEmail()
    public email: string;

    @ApiProperty()
    @IsString()
    @Matches(regEx.password)
    public password: string;

}