import { BaseEntity, Entity, ManyToOne, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";
import { UserEntity } from "src/modules/user/user.entity";

@Entity('contact_starred')
export class StarredContactEntity extends BaseEntity {
    
    @ManyToOne(() => ContactEntity, contact => contact.starredContacts, { primary: true, nullable: false, eager: true })
    @JoinColumn({ name: 'id_contact' })
    contact: ContactEntity;

    @ManyToOne(() => UserEntity, user => user.starredContacts, { primary: true, nullable: false })
    @JoinColumn({ name: 'id_user' })
    user: UserEntity;
    
}