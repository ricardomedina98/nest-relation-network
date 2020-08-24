import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ProfessionDto {

    @IsNotEmpty()
    @IsNumber()
    id_profession: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}