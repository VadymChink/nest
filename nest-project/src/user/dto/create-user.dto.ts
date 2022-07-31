import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";


export class CreateUserDto {

    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    public username: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    public email:string;

    @IsNumber()
    @IsNotEmpty()
    public age: number;

    @IsBoolean()
    @IsOptional()
    public status: boolean;

    @IsString()
    @IsNotEmpty()
    @Length(2,20)
    public password:string;

    public created_at: string
}
