import { Controller, Get, Param, ParseIntPipe, Post, Body, Put, UseGuards, UsePipes, ValidationPipe, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../role/guards/role.guard';
import { Roles } from '../role/decorators/role.decorator';
import { RoleType } from '../role/role-type.enum';

@UseGuards(AuthGuard(), RoleGuard)
@UsePipes(ValidationPipe)
@Controller('users')
export class UserController {
    constructor(
        private readonly _userService: UserService
    ) {}

    @Get('contacts/starred')
    @Roles(RoleType.ADMIN, RoleType.GENERAL)
    async getUserContactsStarred(@Request() req: any)  { //: Promise<UserDto>
        return await this._userService.getAllContactsStarred(req.user);
    }

    @Get(':id')
    @Roles(RoleType.ADMIN)
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
        return await this._userService.getById(id);;
    }

    @Get()
    @Roles(RoleType.ADMIN)
    async getUsers(): Promise<UserDto[]> {
        return await this._userService.getAll();;
    }

    @Post()
    @Roles(RoleType.ADMIN)
    async createUser(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
        return this._userService.create(createUserDto)
    }

    @Put(':id')
    @Roles(RoleType.ADMIN)
    async updateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateUserDto: UpdateUserDto
    ): Promise<UserDto> {
        return this._userService.update(id, updateUserDto);
    }
}
