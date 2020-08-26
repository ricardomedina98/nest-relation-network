import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactRepository } from './repositories/contact.repository';
import { ProfessionRepository } from './repositories/profession.repository';
import { OcupationRepository } from './repositories/ocupation.repository';
import { ClasificationRepository } from './repositories/clasification.repository';
import { HobbieRepository } from './repositories/hobbie.repository';
import { TitleRepository } from './repositories/title.repository';
import { GenderRepository } from './repositories/gender.repository';
import { CivilStatusRepository } from './repositories/civil-status.repository';
import { AddressRepository } from './repositories/address.repository';
import { CountryRepository } from '../world/repositories/country.repository';
import { StateRepository } from '../world/repositories/state.repository';
import { CityRepository } from '../world/repositories/city.repository';
import { AuthModule } from '../auth/auth.module';
import { UserRepository } from '../user/user.repository';
import { StarredContactRepository } from './repositories/starred-contact.repository';
import { TypeRelationshipRepository } from './repositories/type-relationship.repository';
import { QualityRelationshipRepository } from './repositories/quality-relationship.repository';

@Module({
    imports: [TypeOrmModule.forFeature([ContactRepository, 
        ProfessionRepository, OcupationRepository, 
        ClasificationRepository, HobbieRepository, 
        TitleRepository, GenderRepository, CivilStatusRepository,
        AddressRepository, CountryRepository, StateRepository, CityRepository, 
        UserRepository, StarredContactRepository, TypeRelationshipRepository, QualityRelationshipRepository]), AuthModule],
    controllers: [ContactController],
    providers: [ContactService]
})
export class ContactModule {}
