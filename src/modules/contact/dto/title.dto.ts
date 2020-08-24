import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class TitleDto {

    @IsNotEmpty()
    @IsNumber()
    id_title: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}