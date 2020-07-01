import { MigrationInterface, QueryRunner } from "typeorm";
export declare class firstMigration1593622019212 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
