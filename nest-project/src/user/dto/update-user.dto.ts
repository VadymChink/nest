import {IsBoolean, IsNotEmpty, IsNumber, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export  class UpdateUserDto{

    @ApiProperty()
    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    public username: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    public age: number;

    @ApiProperty()
    @IsBoolean()
    public status: boolean;

}