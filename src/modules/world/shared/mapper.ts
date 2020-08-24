import { CountryEntity } from "../entities/country.entity"
import { CountryDto } from "../dto/country.dto";
import { StateEntity } from "../entities/state.entity";
import { StateDto } from "../dto/state.dto";
import { CityEntity } from "../entities/city.entity";
import { CityDto } from "../dto/city.dto";

export const toCountryDto = (data: CountryEntity[]) => {

    let countriesDto: CountryDto[] = data.map(country => {
        return {
            id: country.id,
            name: country.name,
            iso2: country.iso2,
            native: country.native        
        }
    });

    return countriesDto;
}

export const toStateDto = (data: StateEntity[]) => {
    
    let statesDto: StateDto[] = data.map(state => {
        return {
            id: state.id,
            name: state.name,
            countryCode: state.countryCode,
            iso2: state.iso2
        }
    }).sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));;

    return statesDto;
}

export const toCityDto = (data: CityEntity[]) => {
    
    let citiesDto: CityDto[] = data.map(city => {
        return {
            id: city.id,
            name: city.name,
            countryCode: city.countryCode,
            stateCode: city.stateCode
        }
    });

    return citiesDto;

}

export const toCountryAxiosDto = (dataSpanish: any[], dataDatabase: CountryEntity[]) => {

    const dataTranslated = dataSpanish.filter(f => {
        return dataDatabase.find(a => a.iso2 === f.alpha2Code);
    });

    let countriesDto: CountryDto[] = dataTranslated.map(country => {
        return {
            name: country.translations.es,
            iso2: country.alpha2Code,
            native: country.nativeName        
        }
    }).sort((a, b) => a.name.localeCompare(b.name, 'es', { sensitivity: 'base' }));

    return countriesDto;
}