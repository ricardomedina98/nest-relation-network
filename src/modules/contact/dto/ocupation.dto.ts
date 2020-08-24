import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class OcupationDto {

    @IsNotEmpty()
    @IsNumber()
    id_ocupation: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}