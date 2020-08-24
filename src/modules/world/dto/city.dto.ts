import { IsNumber, IsString, IsNotEmpty } from "class-validator";

export class CityDto {
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    stateCode: string;

    @IsString()
    @IsNotEmpty()
    countryCode: string;
}