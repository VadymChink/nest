import {IsBoolean, IsNotEmpty, IsNumber, IsString, Length} from "class-validator";

export  class UpdateUserDto{

    @IsString()
    @Length(2,20)
    @IsNotEmpty()
    public username: string;

    @IsNumber()
    @IsNotEmpty()
    public age: number;

    @IsBoolean()
    public status: boolean;

}