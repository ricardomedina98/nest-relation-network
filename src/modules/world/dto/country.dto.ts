import { IsNumber, IsString } from "class-validator";

export class CountryDto {

    @IsNumber()
    id?: number;

    @IsString()
    name: string;

    @IsString()
    iso2: string;

    @IsString()
    native: string;
}