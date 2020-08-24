import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";


@Entity('contact_genders')
export class GenderEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_gender: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.gender)
    contacts: ContactEntity[];

}
