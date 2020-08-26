import { ContactEntity } from "../entities/contact.entity";
import { ContactDto } from "../dto/contact/contact.dto";
import { ProfessionEntity } from "../entities/profession.entity";
import { ProfessionDto } from "../dto/profession.dto";
import { OcupationDto } from "../dto/ocupation.dto";
import { OcupationEntity } from "../entities/ocupation.entity";
import { ClasificationDto } from "../dto/clasification.dto";
import { ClasificationEntity } from "../entities/clasification.entity";
import { HobbieEntity } from "../entities/hobbie.entity";
import { HobbieDto } from "../dto/hobbie.dto";
import { TitleEntity } from "../entities/title.entity";
import { TitleDto } from "../dto/title.dto";
import { GenderEntity } from "../entities/gender.entity";
import { GenderDto } from "../dto/gender.dto";
import { CivilStatusEntity } from "../entities/civil-status.entity";
import { CivilStatusDto } from "../dto/civil-status.dto";
import { ContactMinDto } from "../dto/contact/contact-min.dto";
import { AddressEntity } from "../entities/address.entity";
import { AddressDto } from "../dto/address.dto";
import { toUserDto } from "src/shared/mapper";
import { ContactStarredDto } from "../dto/contact/contact-starred.dto";
import { StarredContactEntity } from "../entities/starred-contact.entity";
import { TypeRelationshipEntity } from "../entities/type-relationship.entity";
import { TypeRelationshipDto } from "../dto/type-relationship.dto";
import { QualityRelationshipDto } from "../dto/quality-relationship.dto";
import { QualityRelationshipEntity } from "../entities/quality-relationship.entity";

export const toContactDto = (contactEntity: ContactEntity): ContactDto => {
    return {
        id_contact: contactEntity.id_contact,
        name: contactEntity.name,
        firstSurname: contactEntity.firstSurname,
        secondSurname: contactEntity.secondSurname,
        phone: contactEntity.phone,
        age: contactEntity.age,
        alias: contactEntity.alias,
        email: contactEntity.email,
        timeMeet: contactEntity.timeMeet,
        have_you_referred: contactEntity.have_you_referred,
        you_have_referred_contact: toContactMinDto(contactEntity.you_have_referred_contact),
        has_referred_you: contactEntity.has_referred_you,
        has_referred_you_contact: toContactMinDto(contactEntity.has_referred_you_contact),
        title: toTitleDto(contactEntity.title),
        gender: toGenderDto(contactEntity.gender),
        civilstatus: toCivilStatusDto(contactEntity.civilstatus),
        profession: toProfessionDto(contactEntity.profession),
        ocupation: toOcupationDto(contactEntity.ocupation),
        clasification: toClasificationDto(contactEntity.clasification),
        hobbie: toHobbieDto(contactEntity.hobbie),
        address: toAddressDto(contactEntity.address),
        user: toUserDto(contactEntity.user),
        type_relationship: toRelationshipDto(contactEntity.typeRelationship),
        quality_relationship: toQualityRelationshipDto(contactEntity.qualityRelationship),
        createdAt: contactEntity.createdAt,
        updatedAt: contactEntity.updatedAt
    }
}

export const toContactMinDto = (contactEntity: ContactEntity): ContactMinDto => { 

    return {
        id_contact: contactEntity?.id_contact,
        name: contactEntity?.name,
        firstSurname: contactEntity?.firstSurname,
        secondSurname: contactEntity?.secondSurname
    }

}

export const toContactStarred = (contactEntity: StarredContactEntity): ContactStarredDto => { 
    return {
        id_contact: contactEntity.contact.id_contact
    }
}

export const toProfessionDto = (professionsEntity: ProfessionEntity): ProfessionDto => {

    return {
        id_profession: professionsEntity?.id_profession,
        name: professionsEntity?.name
    };

}

export const toOcupationDto = (ocupationsEntity: OcupationEntity): OcupationDto => {

    return {
        id_ocupation: ocupationsEntity?.id_ocupation,
        name: ocupationsEntity?.name
    };

}

export const toClasificationDto = (clasificationsEntity: ClasificationEntity): ClasificationDto => {

    return {
        id_clasification: clasificationsEntity?.id_clasification,
        name: clasificationsEntity?.name
    };

}

export const toHobbieDto = (hobbiesEntity: HobbieEntity): HobbieDto => {

    return {
        id_hobbie: hobbiesEntity?.id_hobbie,
        name: hobbiesEntity?.name
    };

}

export const toTitleDto = (titlesEntity: TitleEntity): TitleDto => {

    return {
        id_title: titlesEntity?.id_title,
        name: titlesEntity?.name
    };

}

export const toGenderDto = (gendersEntity: GenderEntity): GenderDto => {

    return {
        id_gender: gendersEntity?.id_gender,
        name: gendersEntity?.name
    };

}

export const toCivilStatusDto = (civilStatusEntity: CivilStatusEntity): CivilStatusDto => {

    return {
        id_civilstatus: civilStatusEntity?.id_civilstatus,
        name: civilStatusEntity?.name
    };

}

export const toAddressDto = (addressEntity: AddressEntity) : AddressDto => {

    return {
        country: {
            id: addressEntity.country?.id,
            name: addressEntity.country?.name,
            iso2: addressEntity.country?.iso2
        },
        state: {
            id: addressEntity.state?.id,
            name: addressEntity.state?.name,
            iso2: addressEntity.state?.iso2
        },
        city: {
            id: addressEntity.city?.id,
            name: addressEntity.city?.name,
            stateCode: addressEntity?.city?.stateCode
        },
        postalCode: addressEntity?.postalCode
    }

}

export const toRelationshipDto = (relationshipEntity: TypeRelationshipEntity): TypeRelationshipDto => {

    return {
        id_type_relationship: relationshipEntity?.id_type_relationship,
        name: relationshipEntity?.name
    };

}

export const toQualityRelationshipDto = (relationshipQuality: QualityRelationshipEntity): QualityRelationshipDto => {

    return {
        id_quality_relationship: relationshipQuality?.id_quality_relationship,
        name: relationshipQuality?.name
    };

}