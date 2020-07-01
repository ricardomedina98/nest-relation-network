import { BaseEntity } from "typeorm";
import { UserDetails } from "./user.details.entity";
export declare class User extends BaseEntity {
    id: number;
    email: string;
    password: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
    details: UserDetails;
}
