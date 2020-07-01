import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { UserRepositry } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepositry)
        private readonly _userRepository: UserRepositry
    ) {}

    async get(id: number): Promise<User> {
        if(!id) {
            throw new BadRequestException('id must be sent');
        }

        const user: User = await this._userRepository.findOne(id,{
            where: {
                status: 'ACTIVE'
            }
        });

        if(!user) {
            throw new NotFoundException();
        }

        return user;
    }

    async getAll(): Promise<User[]> {

        const users: User[] = await this._userRepository.find({
            where: {
                status: 'ACTIVE'
            }
        });

        return users;
    }

}
