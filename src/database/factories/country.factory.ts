  
import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { CountryEntity } from 'src/modules/world/entities/country.entity';

define(CountryEntity, (faker: typeof Faker, context: { country: any }) => {

    const country = new CountryEntity();

    country.id = context.country.id;
    country.name = context.country.name;
    country.iso3 = context.country.iso3;
    country.iso2 = context.country.iso2;
    country.phoneCode = context.country.phone_code;
    country.capital = context.country.capital;
    country.currency = context.country.currency;
    country.native = context.country.native;
    country.emoji = null;
    country.emojiU = context.country.emojiU;
    
    return country;


})