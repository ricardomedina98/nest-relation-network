import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CountryEntity } from "src/modules/world/entities/country.entity";
import { StateEntity } from "src/modules/world/entities/state.entity";
import { CityEntity } from "src/modules/world/entities/city.entity";

@Entity('contact_address')
export class AddressEntity extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id_address: number;

    @Column({type: 'int', nullable: true})
    postalCode: number;


    @ManyToOne(() => CountryEntity, {
        eager: true,
        nullable: true
    })
    @JoinColumn({name: 'id_country'})
    country: CountryEntity;

    
    @ManyToOne(() => StateEntity, {
        eager: true,
        nullable: true
    })
    @JoinColumn({name: 'id_state'})
    state: StateEntity;

    @ManyToOne(() => CityEntity, {
        eager: true,
        nullable: true
    })
    @JoinColumn({name: 'id_city'})
    city: CityEntity;

}