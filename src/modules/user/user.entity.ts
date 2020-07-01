import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserDetails } from "./user.details.entity";

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @Column({type: 'varchar', default: 'ACTIVE', length: 8})
    status: string;

    @Column({type: 'timestamp', name: 'created_at'})
    createdAt: Date;

    @Column({type: 'timestamp', name: 'updated_at'})
    updatedAt: Date;

    @OneToOne(type => UserDetails, {
        cascade: true, 
        nullable: false, 
        eager: true,
    })
    @JoinColumn({name: 'id_details'})
    details: UserDetails;
}