import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class StateDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    countryCode: string;

    @IsString()
    @IsNotEmpty()
    iso2: string;
}