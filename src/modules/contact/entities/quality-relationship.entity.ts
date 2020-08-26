import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_quality_relationships')
export class QualityRelationshipEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_quality_relationship: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.qualityRelationship)
    contacts: ContactEntity[];
}