import { Controller, Get, Post, Body, Request, UsePipes, ValidationPipe, UseGuards, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ProfessionDto } from './dto/profession.dto';
import { OcupationDto } from './dto/ocupation.dto';
import { ClasificationDto } from './dto/clasification.dto';
import { HobbieDto } from './dto/hobbie.dto';
import { TitleDto } from './dto/title.dto';
import { GenderDto } from './dto/gender.dto';
import { CivilStatusDto } from './dto/civil-status.dto';
import { CreateContactDto } from './dto/contact/create-contact.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../role/guards/role.guard';
import { Roles } from '../role/decorators/role.decorator';
import { RoleType } from '../role/role-type.enum';
import { UserDto } from '../user/dto/user.dto';

@UseGuards(AuthGuard(), RoleGuard)
@UsePipes(ValidationPipe)
@Controller('contacts')
export class ContactController {

    constructor(
        private readonly _contactService: ContactService
    ) {}

    @Get('profession')
    async getProfessions(): Promise<ProfessionDto[]> {
        return this._contactService.getAllProfessions();
    }

    @Get('ocupation')
    async getOcupations(): Promise<OcupationDto[]> {
        return this._contactService.getAllOcupations();
    }

    @Get('clasification')
    async getClasification(): Promise<ClasificationDto[]> {
        return this._contactService.getAllClasifications();
    }

    @Get('hobbie')
    async getHobbies(): Promise<HobbieDto[]> {
        return this._contactService.getAllHobbies();
    }

    @Get('title')
    async getTitles(): Promise<TitleDto[]> {
        return this._contactService.getAllTitles();
    }

    @Get('gender')
    async getGenders(): Promise<GenderDto[]> {
        return this._contactService.getAllGenders();
    }

    @Get('civil-status')
    async getCivilStatus(): Promise<CivilStatusDto[]> {
        return this._contactService.getAllCivilStatuses();
    }

    @Post()
    @Roles(RoleType.ADMIN, RoleType.GENERAL)
    async createContact(@Body() createContactDto: CreateContactDto, @Request() req: any) {
        return this._contactService.createContactByUser(createContactDto, req.user);
    }

    @Get('user')
    @Roles(RoleType.ADMIN, RoleType.GENERAL)
    async getContacts(@Request() req: any) {
        return this._contactService.getAllContactsByUser(req.user);
    }

    @Put('starred/:id_contact')
    @Roles(RoleType.ADMIN, RoleType.GENERAL)
    async addStarredContact(@Param('id_contact', ParseIntPipe) id_contact: number, @Request() req: any) {
        return this._contactService.addStarredContact(id_contact, req.user);
    }

    @Delete('starred/:id_contact')
    @Roles(RoleType.ADMIN, RoleType.GENERAL)
    async unStarredContact(@Param('id_contact', ParseIntPipe) id_contact: number, @Request() req: any) {
        return this._contactService.unStarredContact(id_contact, req.user);
    }


}
