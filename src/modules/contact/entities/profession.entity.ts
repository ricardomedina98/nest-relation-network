import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_professions')
export class ProfessionEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id_profession: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.profession)
    contacts: ContactEntity[];

}