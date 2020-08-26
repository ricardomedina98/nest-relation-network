import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class QualityRelationshipDto {

    @IsNotEmpty()
    @IsNumber()
    id_quality_relationship: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}