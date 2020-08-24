import { Controller, UsePipes, ValidationPipe, Get, Param } from '@nestjs/common';
import { WorldService } from './world.service';


//@UseGuards(AuthGuard(), RoleGuard)
@UsePipes(ValidationPipe)
@Controller('world')
export class WorldController {
    constructor(
        private readonly _worldService: WorldService
    ) {}

    @Get('countries')
    async getCountries() {
        return await this._worldService.getAllCountries();
    }

    @Get('countries/:iso2/states')
    async getStatesByCountry(@Param('iso2') iso2: string) {
        return await this._worldService.getStatesByCountry(iso2);
    }

    @Get('countries/states/:iso2/cities')
    async getCitiesByState(@Param('iso2') iso2: string) {
        return await this._worldService.getCitiesByState(iso2);
    }

}
