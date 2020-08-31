import { Repository, EntityRepository } from "typeorm";
import { ContactEntity } from "../entities/contact.entity";
import { ContactStatus } from "../types/contact-status.enum";

@EntityRepository(ContactEntity)
export class ContactRepository extends Repository<ContactEntity> {

    async existContactExceptById(id_contact: number, id_user: number, name: string, firstSurname: string): Promise<ContactEntity> {

        return await this.createQueryBuilder('contact')
        .where("contact.id_user = :id_user AND contact.id_contact != :id_contact AND contact.name = :name AND contact.first_surname = :first_surname AND contact.status = :status", {
            id_contact,
            name,
            id_user,
            first_surname: firstSurname,
            status: ContactStatus.ACTIVE
        })
        .getOne();
    }

}