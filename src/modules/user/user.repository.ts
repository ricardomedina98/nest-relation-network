import { Repository, Entity, EntityRepository } from "typeorm";
import { User } from "./user.entity";

@EntityRepository(User)
export class UserRepositry extends Repository<User> {

}