import { UserRepositry } from './user.repository';
import { User } from './user.entity';
export declare class UserService {
    private readonly _userRepository;
    constructor(_userRepository: UserRepositry);
    get(id: number): Promise<User>;
    getAll(): Promise<User[]>;
}
