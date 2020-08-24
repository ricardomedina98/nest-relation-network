import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityRepository } from './repositories/city.repository';
import { CountryRepository } from './repositories/country.repository';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { StateRepository } from './repositories/state.repository';

@Module({
    imports: [TypeOrmModule.forFeature([CountryRepository, StateRepository, CityRepository]), HttpModule],
    controllers: [WorldController],
    providers: [WorldService]
})
export class WorldModule {}
