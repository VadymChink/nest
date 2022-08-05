import {IsEmail, IsNotEmpty, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class RegisterUserDto {
    @ApiProperty()
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    public username: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    public email:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(2,20)
    public password:string;
}

