import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_titles')
export class TitleEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id_title: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(type => ContactEntity, contact => contact.title)
    contacts: ContactEntity[];

}