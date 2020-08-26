import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_type_relationship')
export class TypeRelationshipEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_type_relationship: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.typeRelationship)
    contacts: ContactEntity[];
}