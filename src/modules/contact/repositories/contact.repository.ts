import { Repository, EntityRepository } from "typeorm";
import { ContactEntity } from "../entities/contact.entity";

@EntityRepository(ContactEntity)
export class ContactRepository extends Repository<ContactEntity> {

}