import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_clasification')
export class ClasificationEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_clasification: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.clasification)
    contacts: ContactEntity[];
    
}