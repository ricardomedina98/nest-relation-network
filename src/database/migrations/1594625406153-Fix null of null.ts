import {MigrationInterface, QueryRunner} from "typeorm";

export class FixNullOfNull1594625406153 implements MigrationInterface {
    name = 'FixNullOfNull1594625406153'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `first_name` `first_name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `second_name` `second_name` varchar(255) NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `second_name` `second_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `first_name` `first_name` varchar(255) NOT NULL");
    }

}
