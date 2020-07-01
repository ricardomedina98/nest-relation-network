import { IsNotEmpty, IsEmail } from "class-validator";
import { UserDetails } from "../user.details.entity";

export class UserDto {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    detials: UserDetails;


}