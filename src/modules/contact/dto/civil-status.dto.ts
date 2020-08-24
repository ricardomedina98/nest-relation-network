import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CivilStatusDto {

    @IsNotEmpty()
    @IsNumber()
    id_civilstatus: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}