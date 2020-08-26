import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, OneToOne, OneToMany } from "typeorm";
import { TitleEntity } from "./title.entity";
import { GenderEntity } from "./gender.entity";
import { CivilStatusEntity } from "./civil-status.entity";
import { ProfessionEntity } from "./profession.entity";
import { OcupationEntity } from "./ocupation.entity";
import { ClasificationEntity } from "./clasification.entity";
import { HobbieEntity } from "./hobbie.entity";
import { ContactStatus } from "../types/contact-status.enum";
import { AddressEntity } from "./address.entity";
import { StarredContactEntity } from "./starred-contact.entity";
import { UserEntity } from "src/modules/user/user.entity";
import { TypeRelationshipEntity } from "./type-relationship.entity";
import { QualityRelationshipEntity } from "./quality-relationship.entity";

@Entity('contacts')
export class ContactEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id_contact: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false, name: 'first_surname'})
    firstSurname: string;

    @Column({type: 'varchar', nullable: true, name: 'second_surname'})
    secondSurname: string;
 
    @Column({type: 'varchar', nullable: true})
    phone: string;

    @Column({type: 'int', nullable: true})
    age: number;

    @Column({type: 'varchar', nullable: true})
    alias: string;

    @Column({type: 'varchar', nullable: true})
    email: string;

    @Column({type: 'date', name: 'time_meet', nullable: true})
    timeMeet: Date;

    @Column({type: 'boolean', nullable: true})
    have_you_referred: boolean;

    @ManyToOne(() => ContactEntity, {
        nullable: true
    })
    @JoinColumn({name: 'you_have_referred_contact_id'})
    you_have_referred_contact: ContactEntity;

    @Column({type: 'boolean', nullable: true})
    has_referred_you: boolean;

    @ManyToOne(() => ContactEntity, {
        nullable: true
    })
    @JoinColumn({name: 'has_referred_you_contact_id'})
    has_referred_you_contact: ContactEntity;
    

    @ManyToOne(() => TitleEntity, { nullable: true })
    @JoinColumn({name: 'id_title'})
    title: TitleEntity;


    @ManyToOne(() => GenderEntity, { nullable: true })
    @JoinColumn({name: 'id_gender'})
    gender: GenderEntity;


    @ManyToOne(() => CivilStatusEntity, { nullable: true })
    @JoinColumn({name: 'id_civilstatus'})
    civilstatus: CivilStatusEntity;


    @ManyToOne(() => ProfessionEntity, { nullable: true })
    @JoinColumn({name: 'id_profession'})
    profession: ProfessionEntity;


    @ManyToOne(() => OcupationEntity, { nullable: true })
    @JoinColumn({name: 'id_ocupation'})
    ocupation: OcupationEntity;


    @ManyToOne(() => ClasificationEntity, { nullable: true })
    @JoinColumn({name: 'id_clasification'})
    clasification: ClasificationEntity;


    @ManyToOne(() => HobbieEntity, { nullable: true })
    @JoinColumn({name: 'id_hobbie'})
    hobbie: HobbieEntity;
    

    @OneToOne(() => AddressEntity, { nullable: true, cascade: true })
    @JoinColumn({name: 'id_address'})
    address: AddressEntity;

    @ManyToOne(() => TypeRelationshipEntity, { nullable: true })
    @JoinColumn({name: 'id_type_relationship'})
    typeRelationship: TypeRelationshipEntity;

    @ManyToOne(() => QualityRelationshipEntity, { nullable: true })
    @JoinColumn({name: 'id_quality_relationship'})
    qualityRelationship: QualityRelationshipEntity;

    @ManyToOne(() => UserEntity, { nullable: false })
    @JoinColumn({ name: 'id_user' })
    user: UserEntity;



    //Extra Columns
    @Column({ type: 'varchar', default: ContactStatus.ACTIVE, length: 8 })
    status: string;

    @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
    createdAt: Date;

    @CreateDateColumn({ type: 'timestamp', name: 'updated_at' })
    updatedAt: Date;

    //Starred Contact
    @OneToMany(() => StarredContactEntity, contact => contact.contact)
    starredContacts: StarredContactEntity[];

}