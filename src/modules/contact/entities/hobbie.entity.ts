import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { ContactEntity } from "./contact.entity";

@Entity('contact_hobbie')
export class HobbieEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn('increment')
    id_hobbie: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @OneToMany(() => ContactEntity, contact => contact.hobbie)
    contacts: ContactEntity[];

}