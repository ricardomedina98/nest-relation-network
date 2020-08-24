import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_relationship')
export class RelationshipEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_relationship: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.relationship)
    contacts: ContactEntity[];
}