import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_ocupation')
export class OcupationEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id_ocupation: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.ocupation)
    contacts: ContactEntity[];
}