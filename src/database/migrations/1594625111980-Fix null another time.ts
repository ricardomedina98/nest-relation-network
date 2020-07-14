import {MigrationInterface, QueryRunner} from "typeorm";

export class FixNullAnotherTime1594625111980 implements MigrationInterface {
    name = 'FixNullAnotherTime1594625111980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `first_name` `first_name` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `second_name` `second_name` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `second_name` `second_name` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `users_details` CHANGE `first_name` `first_name` varchar(255) NULL");
    }

}
