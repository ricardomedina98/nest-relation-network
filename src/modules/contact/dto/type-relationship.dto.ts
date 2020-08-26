import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class TypeRelationshipDto {

    @IsNotEmpty()
    @IsNumber()
    id_type_relationship: number;

    @IsNotEmpty()
    @IsString()
    name: string;

}