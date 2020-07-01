import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly _userService;
    constructor(_userService: UserService);
    getUser(id: number): Promise<User>;
    getUsers(): Promise<User[]>;
}
