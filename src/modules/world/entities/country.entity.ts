import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { StateEntity } from "./state.entity";

@Entity('countries')
export class CountryEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment', {type: 'mediumint'})
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'char', precision: 3, nullable: false})
    iso3: string;

    @Column({type: 'char', precision: 2, nullable: false})
    iso2: string;

    @Column({type: 'varchar', nullable: true, name: 'phonecode'})
    phoneCode: string;

    @Column({type: 'varchar', nullable: true})
    capital: string;

    @Column({type: 'varchar', nullable: true})
    currency: string;

    @Column({type: 'varchar', nullable: true})
    native: string;

    @Column({type: 'varchar', nullable: true})
    emoji: string;

    @Column({type: 'varchar', nullable: true})
    emojiU: string;

    @CreateDateColumn({type: 'timestamp', nullable: false, name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({type: 'timestamp', nullable: false, name: 'updated_at'})
    updatedAt: Date;

    @Column({type: 'tinyint', precision: 1, nullable: false, default: 1})
    flag: number;

    @Column({type: 'varchar'})
    wikiDataId: string;

    @OneToMany(type => StateEntity, state => state.id)
    states: StateEntity[];

}