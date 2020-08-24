import { IsNumber, IsString, IsNotEmpty } from "class-validator";
import { TitleDto } from "../title.dto";
import { GenderDto } from "../gender.dto";
import { CivilStatusDto } from "../civil-status.dto";
import { ProfessionDto } from "../profession.dto";
import { OcupationDto } from "../ocupation.dto";
import { ClasificationDto } from "../clasification.dto";
import { HobbieDto } from "../hobbie.dto";
import { AddressDto } from "../address.dto";
import { UserDto } from "src/modules/user/dto/user.dto";
import { ContactMinDto } from "./contact-min.dto";
import { ContactStarredDto } from "./contact-starred.dto";

export class ContactDto {
    id_contact: number;
    name: string;
    firstSurname: string;
    secondSurname: string;
    phone: string;
    age: number;
    alias: string;
    timeMeet: Date;
    have_you_referred: boolean;
    you_have_referred_contact: ContactMinDto;
    has_referred_you: boolean;
    has_referred_you_contact: ContactMinDto;
    title: TitleDto;
    gender: GenderDto;
    civilstatus: CivilStatusDto;
    profession: ProfessionDto;
    ocupation: OcupationDto;
    clasification: ClasificationDto;
    hobbie: HobbieDto;
    address: AddressDto;
    user: UserDto;
    createdAt: Date;
    updatedAt: Date;
}