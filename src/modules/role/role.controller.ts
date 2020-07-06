import { Controller, Get, Param, ParseIntPipe, Post, Body, Put } from '@nestjs/common';
import { RoleDTO } from './dto/role.dto';
import { RoleService } from './role.service';
import { CreateRoleDTO } from './dto/create-role.dto';
import { UpdateRoleDTO } from './dto/update-role.dto';
import { ParseNameUpdatePipe } from './pipes/pipe-update.touppercase';
import { ParseNameCreatePipe } from './pipes/pipe-create.touppercase';

@Controller('roles')
export class RoleController {

    constructor(
        private readonly _roleService: RoleService
    ) {}

    @Get(':id')
    async getRoleById(@Param('id', ParseIntPipe) id: number): Promise<RoleDTO> {
        return await this._roleService.getById(id);
    }

    @Get()
    async getRoles(): Promise<RoleDTO[]> {
        return await this._roleService.getAll();
    }

    @Post()
    async createRole(@Body(new ParseNameCreatePipe()) createDto: CreateRoleDTO): Promise<RoleDTO> {
        return await this._roleService.create(createDto);
    }

    @Put(':id')
    async updateRole(@Param('id', ParseIntPipe) id: number,@Body(new ParseNameUpdatePipe()) updateDto: UpdateRoleDTO) {
        return await this._roleService.update(id, updateDto);
    }
}
