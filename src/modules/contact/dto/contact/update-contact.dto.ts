import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean, IsDate, IsNumberString, IsEmail, isEmpty } from "class-validator";
import { Transform } from "class-transformer";
import * as moment from 'moment';

export class UpdateContactDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    firstSurname: string;

    @IsOptional()
    @IsString()
    secondSurname: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsNumber()
    @IsOptional()
    @Transform(value => Number(value))
    age: number;

    @IsOptional()
    @IsString()
    alias: string;

    @IsOptional()
    email: string;

    @IsOptional()
    @Transform(value => moment(value))
    timeMeet: moment.Moment;

    @IsOptional()
    @IsBoolean()
    have_you_referred: boolean;

    @IsNumber()
    @Transform(value => Number(value))
    you_have_referred_contact: number;

    @IsBoolean()
    has_referred_you: boolean;
    
    @Transform(value => Number(value))
    @IsNumber()
    has_referred_you_contact: number;

    @IsNumber()
    @Transform(value => Number(value))
    title: number;

    @IsNumber()
    @Transform(value => Number(value))
    gender: number;

    @IsNumber()
    @Transform(value => Number(value))
    civilstatus: number;

    @IsNumber()
    @Transform(value => Number(value))
    profession: number;

    @IsNumber()
    @Transform(value => Number(value))
    ocupation: number;

    @IsNumber()
    @Transform(value => Number(value))
    clasification: number;

    @IsNumber()
    @Transform(value => Number(value))
    hobbie: number;

    @IsNumber()
    @Transform(value => Number(value))
    type_relationship: number;

    @IsNumber()
    @Transform(value => Number(value))
    quality_relationship: number;
    
    //Address
    @IsNumber()
    @Transform(value => Number(value))
    postalCode: number;

    @IsOptional()
    @IsString()
    country: string;

    @IsOptional()
    @IsString()
    state: string;

    @IsNumber()
    @IsOptional()
    @Transform(value => Number(value))
    city: number;
}