import { IsNotEmpty, IsEmail, IsDate, IsString } from "class-validator"

export class UserDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    firstName: string;

    @IsString()
    secondName?: string;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date

    @IsDate()
    updatedAt: Date

    @IsNotEmpty()
    @IsString()
    role: string;
}