import {IsEmail, IsString, Matches} from "class-validator";

import {regEx} from '../../../const'

export class LoginUserDto {

    @IsString()
    @IsEmail()
    public email: string;

    @IsString()
    @Matches(regEx.password)
    public password: string;

}