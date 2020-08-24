import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class HobbieDto {

    @IsNotEmpty()
    @IsNumber()
    id_hobbie: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}