import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { CountryEntity } from "./country.entity";
import { CityEntity } from "./city.entity";

@Entity('states')
export class StateEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment', {type: 'mediumint'})
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @ManyToOne(type => CountryEntity, country => country.id)
    @JoinColumn({name: 'country_id'})
    country: CountryEntity;

    @Column({type: 'char', precision: 2, nullable: false, name: 'country_code'})
    countryCode: string;

    @Column({type: 'varchar', nullable: true, name: 'fips_code'})
    fipsCode: string;

    @Column({type: "varchar", nullable: true})
    iso2: string;

    @CreateDateColumn({type: 'timestamp', nullable: false, name: 'created_at'})
    createdAt: Date;

    @CreateDateColumn({type: 'timestamp', nullable: false, name: 'updated_at'})
    updatedAt: Date;

    @Column({type: 'tinyint', precision: 1, nullable: false, default: 1})
    flag: number;

    @Column({type: 'varchar', nullable: true})
    wikiDataId: string;

    @OneToMany(type => CityEntity, city => city.id)
    cities: CityEntity[];

}