import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_civilstatus')
export class CivilStatusEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_civilstatus: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.civilstatus)
    contacts: ContactEntity[];
}