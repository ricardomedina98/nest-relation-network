import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContactRepository } from './repositories/contact.repository';
import { ContactStatus } from './types/contact-status.enum';
import { toContactDto, toProfessionDto, toOcupationDto, toClasificationDto, toHobbieDto, toTitleDto, toGenderDto, toCivilStatusDto, toContactMinDto, toRelationshipDto, toQualityRelationshipDto, toUpdateResultDto } from './mapper/contact.mapper';
import { ContactDto } from './dto/contact/contact.dto';
import { ProfessionDto } from './dto/profession.dto';
import { ProfessionRepository } from './repositories/profession.repository';
import { OcupationDto } from './dto/ocupation.dto';
import { OcupationRepository } from './repositories/ocupation.repository';
import { ClasificationDto } from './dto/clasification.dto';
import { ClasificationRepository } from './repositories/clasification.repository';
import { HobbieDto } from './dto/hobbie.dto';
import { HobbieRepository } from './repositories/hobbie.repository';
import { TitleDto } from './dto/title.dto';
import { TitleRepository } from './repositories/title.repository';
import { GenderRepository } from './repositories/gender.repository';
import { GenderDto } from './dto/gender.dto';
import { CivilStatusRepository } from './repositories/civil-status.repository';
import { CivilStatusDto } from './dto/civil-status.dto';
import { CreateContactDto } from './dto/contact/create-contact.dto';
import { AddressRepository } from './repositories/address.repository';
import { CountryRepository } from '../world/repositories/country.repository';
import { CityRepository } from '../world/repositories/city.repository';
import { StateRepository } from '../world/repositories/state.repository';
import * as moment from 'moment';
import { UserDto } from '../user/dto/user.dto';
import { UserRepository } from '../user/user.repository';
import { UserStatus } from '../user/user-status.enum';
import { StarredContactRepository } from './repositories/starred-contact.repository';
import { toUserDto } from 'src/shared/mapper';
import { TypeRelationshipRepository } from './repositories/type-relationship.repository';
import { QualityRelationshipRepository } from './repositories/quality-relationship.repository';
import { TypeRelationshipDto } from './dto/type-relationship.dto';
import { QualityRelationshipDto } from './dto/quality-relationship.dto';
import { UpdateContactDto } from './dto/contact/update-contact.dto';
import { of } from 'rxjs';

@Injectable()
export class ContactService {

    constructor(
        @InjectRepository(ContactRepository)
        private readonly _contactRepository: ContactRepository,
        @InjectRepository(ProfessionRepository)
        private readonly _professionRepository: ProfessionRepository,
        @InjectRepository(OcupationRepository)
        private readonly _ocupationRepository: OcupationRepository,
        @InjectRepository(ClasificationRepository)
        private readonly _clasificationRepository: ClasificationRepository,
        @InjectRepository(HobbieRepository)
        private readonly _hobbieRepository: HobbieRepository,
        @InjectRepository(TitleRepository)
        private readonly _titleRepository: TitleRepository,
        @InjectRepository(GenderRepository)
        private readonly _genderRepository: GenderRepository,
        @InjectRepository(CivilStatusRepository)
        private readonly _civilStatusRepository: CivilStatusRepository,
        @InjectRepository(AddressRepository)
        private readonly _addressRepository: AddressRepository,
        @InjectRepository(CountryRepository)
        private readonly _countryRepository: CountryRepository,
        @InjectRepository(StateRepository)
        private readonly _stateRepository: StateRepository,
        @InjectRepository(CityRepository)
        private readonly _cityRepository: CityRepository,
        @InjectRepository(UserRepository)
        private readonly _userRepository: UserRepository,
        @InjectRepository(StarredContactRepository)
        private readonly _starredContactRepository: StarredContactRepository,
        @InjectRepository(TypeRelationshipRepository)
        private readonly _relationshipRepository: TypeRelationshipRepository,
        @InjectRepository(QualityRelationshipRepository)
        private readonly _qualityRelationshipRepository: QualityRelationshipRepository,
    ) {}

    async getContactById(id_contact: number) {
        const contact = await this._contactRepository.findOne({
            where: {
                id_contact
            },
            relations: [
                "you_have_referred_contact",
                "has_referred_you_contact",
                "title",
                "gender",
                "civilstatus",
                "profession",
                "ocupation",
                "clasification",
                "hobbie",
                "address",
                "user",
                "typeRelationship",
                "qualityRelationship"
            ]
        });

        if(!contact) {
            throw new NotFoundException('Contact does not exist');
        }

        return toContactDto(contact);
    }

    async getAllContactsByUser(user: UserDto) { //: Promise<ContactDto[]>

        const userDB = await this._userRepository.findOne(user.id, { where: { status: UserStatus.ACTIVE } });

        const contacts = await this._contactRepository.find(
        { 
            where: { 
                status: ContactStatus.ACTIVE,
                user: userDB
            },
            loadEagerRelations: true,
            relations: [
                "you_have_referred_contact",
                "has_referred_you_contact",
                "title",
                "gender",
                "civilstatus",
                "profession",
                "ocupation",
                "clasification",
                "hobbie",
                "address",
                "user",
                "typeRelationship",
                "qualityRelationship"
            ]
        });


        return contacts.map(contact => toContactDto(contact));
    }

    async createContactByUser(createContactDto: CreateContactDto, user: UserDto) {

        const userDB = await this._userRepository.findOne(user.id, { where: { status: UserStatus.ACTIVE } });

        //Optional parameters
        const you_have_referred_contactDB = await this._contactRepository.findOne({where: { id_contact: createContactDto.you_have_referred_contact }});
        
        const has_referred_you_contactDB = await this._contactRepository.findOne({where: { id_contact: createContactDto.has_referred_you_contact }});

        const titleDB = await this._titleRepository.findOne({where: { id_title: createContactDto.title }});

        const genderDB = await this._genderRepository.findOne({ where: { id_gender: createContactDto.gender } });
        
        const civilstatusDB = await this._civilStatusRepository.findOne({ where: { id_civilstatus: createContactDto.civilstatus } });

        const professionDB = await this._professionRepository.findOne({where: { id_profession: createContactDto.profession }});
        
        const ocupationDB = await this._ocupationRepository.findOne({where: { id_ocupation: createContactDto.ocupation }});

        const clasificationDB = await this._clasificationRepository.findOne({ where: { id_clasification: createContactDto.clasification } });

        const hobbieDB = await this._hobbieRepository.findOne({ where: { id_hobbie: createContactDto.hobbie } });

        const typeRelationshipDB = await this._relationshipRepository.findOne({where: { id_type_relationship: createContactDto.type_relationship }});

        const qualityRelationshipDB = await this._qualityRelationshipRepository.findOne({where: { id_quality_relationship: createContactDto.quality_relationship }});

        //Address
        const countryDB = await this._countryRepository.findOne({ where: { iso2: createContactDto.country } });
        const stateDB = await this._stateRepository.findOne({ where: { iso2: createContactDto.state }});
        const cityDB = await this._cityRepository.findOne({ where: { id: createContactDto.city }});

        let addressNew = this._addressRepository.create({
            country: countryDB,
            state: stateDB,
            city: cityDB,
            postalCode : createContactDto.postalCode
        });


        const contactNew = this._contactRepository.create({
            name: createContactDto.name,
            firstSurname: createContactDto.firstSurname,
            secondSurname: createContactDto.secondSurname,
            phone: createContactDto.phone,
            age: createContactDto.age,
            alias: createContactDto.alias,
            email: createContactDto.email,
            timeMeet: moment(createContactDto.timeMeet,'YYYY-MM-DD').toDate(),
            have_you_referred: createContactDto.have_you_referred,
            has_referred_you: createContactDto.has_referred_you,
            you_have_referred_contact: you_have_referred_contactDB,
            has_referred_you_contact: has_referred_you_contactDB,
            title: titleDB,
            gender: genderDB,
            civilstatus: civilstatusDB,
            profession: professionDB,
            ocupation: ocupationDB,
            clasification: clasificationDB,
            hobbie: hobbieDB,
            address: addressNew,
            user: userDB,
            typeRelationship: typeRelationshipDB,
            qualityRelationship: qualityRelationshipDB
        });

        let contact = await this._contactRepository.save(contactNew);

        contact = await this._contactRepository.findOne(contact, {
            relations: [
                "you_have_referred_contact",
                "has_referred_you_contact",
                "title",
                "gender",
                "civilstatus",
                "profession",
                "ocupation",
                "clasification",
                "hobbie",
                "address",
                "user",
                "typeRelationship",
                "qualityRelationship"
            ]
        });
        
        return toContactDto(contact);

    }

    async updateContact(id_contact: number, updateContactDto: UpdateContactDto, user: UserDto) {

        const existContact = await this._contactRepository.existContactExceptById(id_contact, user.id, updateContactDto.name, updateContactDto.firstSurname);

        if(existContact) {
            throw new ConflictException('Contact already exist');
        }

        const contact = await this._contactRepository.findOne({ where: { id_contact }, relations: ["address"] });

        if(!contact) {
            throw new NotFoundException('Contact to update does not exist');
        }

        const userDB = await this._userRepository.findOne(user.id, { where: { status: UserStatus.ACTIVE } });

        //Optional parameters
        const you_have_referred_contactDB = await this._contactRepository.findOne({where: { id_contact: updateContactDto.you_have_referred_contact }});
        
        const has_referred_you_contactDB = await this._contactRepository.findOne({where: { id_contact: updateContactDto.has_referred_you_contact }});

        const titleDB = await this._titleRepository.findOne({where: { id_title: updateContactDto.title }});

        const genderDB = await this._genderRepository.findOne({ where: { id_gender: updateContactDto.gender } });
        
        const civilstatusDB = await this._civilStatusRepository.findOne({ where: { id_civilstatus: updateContactDto.civilstatus } });

        const professionDB = await this._professionRepository.findOne({where: { id_profession: updateContactDto.profession }});
        
        const ocupationDB = await this._ocupationRepository.findOne({where: { id_ocupation: updateContactDto.ocupation }});

        const clasificationDB = await this._clasificationRepository.findOne({ where: { id_clasification: updateContactDto.clasification } });

        const hobbieDB = await this._hobbieRepository.findOne({ where: { id_hobbie: updateContactDto.hobbie } });

        const typeRelationshipDB = await this._relationshipRepository.findOne({where: { id_type_relationship: updateContactDto.type_relationship }});

        const qualityRelationshipDB = await this._qualityRelationshipRepository.findOne({where: { id_quality_relationship: updateContactDto.quality_relationship }});

        //Address
        const countryDB = await this._countryRepository.findOne({ where: { iso2: updateContactDto.country } });
        const stateDB = await this._stateRepository.findOne({ where: { iso2: updateContactDto.state }});
        const cityDB = await this._cityRepository.findOne({ where: { id: updateContactDto.city }});


        let contactAddressUpdate = await this._addressRepository.update(contact.address.id_address, {
            country: countryDB,
            state: stateDB,
            city: cityDB,
            postalCode : updateContactDto.postalCode
        });

        let contactUpdated = await this._contactRepository.update(id_contact, {
            name: updateContactDto.name,
            firstSurname: updateContactDto.firstSurname,
            secondSurname: updateContactDto.secondSurname,
            phone: updateContactDto.phone,
            age: updateContactDto.age,
            alias: updateContactDto.alias,
            email: updateContactDto.email,
            timeMeet: moment(updateContactDto.timeMeet,'YYYY-MM-DD').toDate(),
            have_you_referred: updateContactDto.have_you_referred,
            has_referred_you: updateContactDto.has_referred_you,
            you_have_referred_contact: you_have_referred_contactDB,
            has_referred_you_contact: has_referred_you_contactDB,
            title: titleDB,
            gender: genderDB,
            civilstatus: civilstatusDB,
            profession: professionDB,
            ocupation: ocupationDB,
            clasification: clasificationDB,
            hobbie: hobbieDB,
            user: userDB,
            typeRelationship: typeRelationshipDB,
            qualityRelationship: qualityRelationshipDB
        });

        return await this.getContactById(id_contact);
    }

    async deleteContact(id_contact: number) {

        const contact = await this._contactRepository.findOne({
            where: {
                id_contact
            }
        });

        if(!contact) {
            throw new NotFoundException('Contact does not exist');
        }

        const contactUpdated = await this._contactRepository.update(contact.id_contact, {
            status: ContactStatus.INACTIVE
        });

        return toUpdateResultDto(contactUpdated);

    }

    async addStarredContact(id_contact: number, user: UserDto) {

        const existContact = await this._contactRepository.findOne(id_contact, {
            where: {
                status: ContactStatus.ACTIVE
            }
        });

        if(!existContact) {
            throw new NotFoundException('User does not exist');
        }

        const userDB = await this._userRepository.findOne(user.id);

        const starredContact = await this._starredContactRepository.save({
            contact: existContact,
            user: userDB
        });

        return toUserDto(starredContact.user);

    }

    async unStarredContact(id_contact: number, user: UserDto) {

        const existContact = await this._contactRepository.findOne(id_contact, {
            where: {
                status: ContactStatus.ACTIVE
            }
        });

        if(!existContact) {
            throw new NotFoundException('User does not exist');
        }

        const userDB = await this._userRepository.findOne(user.id);

        const starredContact = await this._starredContactRepository.delete({
            user: userDB,
            contact: existContact
        });

        return starredContact;

    }

    async getAllProfessions(): Promise<ProfessionDto[]> {

        const professions = await this._professionRepository.find({
            order: {
                name: "ASC"
            }
        });

        return professions.map(profession => toProfessionDto(profession));

    }

    async getAllOcupations(): Promise<OcupationDto[]> {

        const ocupations = await this._ocupationRepository.find({
            order: {
                name: "ASC"
            }
        });

        return ocupations.map(ocupation => toOcupationDto(ocupation));

    }

    async getAllClasifications(): Promise<ClasificationDto[]> {
        const clasifications = await this._clasificationRepository.find({
            order: {
                name: "ASC"
            }
        });

        return clasifications.map(clasification => toClasificationDto(clasification));
    }

    async getAllHobbies(): Promise<HobbieDto[]> {
        const hobbies = await this._hobbieRepository.find({
            order: {
                name: "ASC"
            }
        });

        return hobbies.map(hobbie => toHobbieDto(hobbie));
    }

    async getAllTitles(): Promise<TitleDto[]> {
        const titles = await this._titleRepository.find({
            order: {
                name: "ASC"
            }
        });

        return titles.map(title => toTitleDto(title));
    }

    async getAllGenders(): Promise<GenderDto[]> {
        const genders = await this._genderRepository.find({
            order: {
                name: "ASC"
            }
        });

        return genders.map(gender => toGenderDto(gender));
    }

    async getAllCivilStatuses(): Promise<CivilStatusDto[]> {
        const civilStatuses = await this._civilStatusRepository.find({
            order: {
                name: "ASC"
            }
        });

        return civilStatuses.map(civilStatus => toCivilStatusDto(civilStatus));
    }

    async getAllRelationships(): Promise<TypeRelationshipDto[]> {
        const relationships = await this._relationshipRepository.find({
            order: {
                name: "ASC"
            }
        });

        return relationships.map(relationship => toRelationshipDto(relationship));
    }

    async getAllQualityRelationships(): Promise<QualityRelationshipDto[]> {
        const qualityRelationships = await this._qualityRelationshipRepository.find();

        return qualityRelationships.map(q_relationship => toQualityRelationshipDto(q_relationship));
    }


}
