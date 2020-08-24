import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class ClasificationDto {

    @IsNotEmpty()
    @IsNumber()
    id_clasification: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}