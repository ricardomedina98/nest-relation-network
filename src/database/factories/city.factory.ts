  
import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CityEntity } from 'src/modules/world/entities/city.entity';
import { CountryEntity } from 'src/modules/world/entities/country.entity';
import { StateEntity } from 'src/modules/world/entities/state.entity';

define(CityEntity, (faker: typeof Faker, context: { city: any, state: StateEntity, country: CountryEntity }) => {

    const city = new CityEntity();

    city.id = context.city.id;
    city.name = context.city.name;
    city.stateCode = context.city.state_code;
    city.countryCode = context.city.country_code;
    city.latitude = context.city.latitude;
    city.longitude = context.city.longitude;

    city.state = context.state;
    city.country = context.country;
    
    return city;

})