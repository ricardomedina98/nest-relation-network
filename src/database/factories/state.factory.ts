  
import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { StateEntity } from 'src/modules/world/entities/state.entity';
import { CountryEntity } from 'src/modules/world/entities/country.entity';

define(StateEntity, (faker: typeof Faker, context: { state: any, country: CountryEntity }) => {

    const state = new StateEntity();

    state.id = context.state.id;
    state.name = context.state.name;
    state.country = context.state.country_id;
    state.countryCode = context.state.country_code;
    state.iso2 = context.state.state_code;
    
    return state;

})