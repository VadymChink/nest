import {IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty()
    @IsString()
    @Length(2, 20)
    @IsNotEmpty()
    public username: string;

    @ApiProperty({
        uniqueItems: true,
    })
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    public email: string;

    @ApiProperty({
        default: 1,
        type: Number,
        required: false,
    })
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    public age: number;

    @ApiProperty()
    @IsBoolean()
    @IsOptional()
    public status: boolean;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(2, 20)
    public password: string;

    @ApiProperty()
    public created_at: string
}
