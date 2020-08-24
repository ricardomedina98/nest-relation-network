import { IsNotEmpty, IsString, IsDate } from "class-validator";

export class RoleDTO {

    @IsNotEmpty()
    id_role: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;
}