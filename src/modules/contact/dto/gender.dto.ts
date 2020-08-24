import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class GenderDto {

    @IsNotEmpty()
    @IsNumber()
    id_gender: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}