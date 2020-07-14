import {MigrationInterface, QueryRunner} from "typeorm";

export class FixNull1594620868945 implements MigrationInterface {
    name = 'FixNull1594620868945'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `second_name` `second_name` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `second_name` `second_name` varchar(255) NOT NULL");
    }

}
