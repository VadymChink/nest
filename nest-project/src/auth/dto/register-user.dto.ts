import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";

export class RegisterUserDto {
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    public username: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    public email:string;

    @IsString()
    @IsNotEmpty()
    @Length(2,20)
    public password:string;
}

