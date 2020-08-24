import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { StateEntity } from "./state.entity";
import { CountryEntity } from "./country.entity";

@Entity('cities')
export class CityEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment', {type: 'mediumint'})
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @ManyToOne(type => StateEntity, {
        nullable: false
    })
    @JoinColumn({name: 'state_id'})
    state: StateEntity;

    @Column({type: 'varchar', nullable: false, name: 'state_code'})
    stateCode: string;

    @ManyToOne(type => CountryEntity, {
        nullable: false
    })
    @JoinColumn({name: 'country_id'})
    country: CountryEntity;

    @Column({type: 'char', precision: 2, nullable: false, name: 'country_code'})
    countryCode: string;

    @Column({type: 'decimal', nullable: false, precision: 10, scale: 8})
    latitude: number;

    @Column({type: 'decimal', nullable: false, precision: 11, scale: 8})
    longitude: number;

    @CreateDateColumn({type: 'timestamp', nullable: false, name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({type: 'timestamp', nullable: false, name: 'updated_at'})
    updatedAt: Date;

    @Column({type: 'tinyint', precision: 1, nullable: false, default: 1})
    flag: number;

    @Column({type: 'varchar', nullable: true})
    wikiDataId: string;

}