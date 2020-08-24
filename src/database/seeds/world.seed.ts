import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import * as Path from 'path';
import * as fs from 'fs';
import { CityEntity } from 'src/modules/world/entities/city.entity';
import { CountryEntity } from 'src/modules/world/entities/country.entity';
import { StateEntity } from 'src/modules/world/entities/state.entity';
import { CountryRepository } from 'src/modules/world/repositories/country.repository';
import { StateRepository } from 'src/modules/world/repositories/state.repository';

export default class CreateWorld implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        const countryFile = Path.join(__dirname, `../data/countries.json`);
        const stateFile = Path.join(__dirname, `../data/states.json`);
        const cityFile = Path.join(__dirname, `../data/cities.json`);

        const countries = JSON.parse(fs.readFileSync(countryFile, 'utf8'));
        const states = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
        const cities = JSON.parse(fs.readFileSync(cityFile, 'utf8'));

        for(const country of countries) {
            await factory(CountryEntity)({ country }).create();
        }

        for(const state of states) {
            const country = await connection.getCustomRepository(CountryRepository).findOne(state.country_id);
            await factory(StateEntity)({ state, country }).create();
        }

        for(const city of cities) {
            const country = await connection.getCustomRepository(CountryRepository).findOne(city.country_id);
            const state = await connection.getCustomRepository(StateRepository).findOne(city.state_id);
            await factory(CityEntity)({ city: city, state: state, country: country }).create();
        }

    }
}