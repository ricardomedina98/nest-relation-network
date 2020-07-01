import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users_details')
export class UserDetails extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @Column({type: 'varchar', nullable: false, name: 'first_name'})
    firstName: string;

    @Column({type: 'varchar', nullable: false, name: 'second_name'})
    secondName: string;

}