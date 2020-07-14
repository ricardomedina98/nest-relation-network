import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class SignUpDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}