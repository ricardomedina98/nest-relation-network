import { Injectable, HttpService } from "@nestjs/common";
import { CountryRepository } from "./repositories/country.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { StateRepository } from "./repositories/state.repository";
import { CityRepository } from "./repositories/city.repository";
import { toCountryDto, toStateDto, toCityDto, toCountryAxiosDto } from "./shared/mapper";

@Injectable()
export class WorldService {
    constructor(
        @InjectRepository(CountryRepository)
        private readonly _countryRepository: CountryRepository,
        @InjectRepository(StateRepository)
        private readonly _stateRepository: StateRepository,
        @InjectRepository(CityRepository)
        private readonly _cityRepository: CityRepository,
        private readonly _httpService: HttpService
    ) {}

    async getAllCountries() {

        // const countriesSpanish = await this._httpService.get('https://restcountries.eu/rest/v2').toPromise();
        
        const countriesDatabase = await this._countryRepository.find();

        return toCountryDto(countriesDatabase);

    }

    async getStatesByCountry(iso2: string) {

        const states = await this._stateRepository.find({
            where: {
                countryCode: iso2
            }
        });

        return toStateDto(states);
    }

    async getCitiesByState(iso2: string) {

        const cities = await this._cityRepository.find({
            where: {
                stateCode: iso2
            }
        });

        return toCityDto(cities);

    }
}