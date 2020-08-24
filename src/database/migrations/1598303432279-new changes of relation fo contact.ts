import {MigrationInterface, QueryRunner} from "typeorm";

export class newChangesOfRelationFoContact1598303432279 implements MigrationInterface {
    name = 'newChangesOfRelationFoContact1598303432279'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `contact_relationship` (`id_relationship` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id_relationship`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `contact_quality_relationship` (`id_quality_relationship` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id_quality_relationship`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `contacts` ADD `email` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `contacts` ADD `id_relationship` int NULL");
        await queryRunner.query("ALTER TABLE `contacts` ADD `id_quality_relationship` int NULL");
        await queryRunner.query("ALTER TABLE `cities` DROP COLUMN `country_code`");
        await queryRunner.query("ALTER TABLE `cities` ADD `country_code` char(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `cities` CHANGE `flag` `flag` tinyint(1) NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `states` DROP COLUMN `country_code`");
        await queryRunner.query("ALTER TABLE `states` ADD `country_code` char(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `states` CHANGE `flag` `flag` tinyint(1) NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `countries` DROP COLUMN `iso3`");
        await queryRunner.query("ALTER TABLE `countries` ADD `iso3` char(3) NOT NULL");
        await queryRunner.query("ALTER TABLE `countries` DROP COLUMN `iso2`");
        await queryRunner.query("ALTER TABLE `countries` ADD `iso2` char(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `countries` CHANGE `flag` `flag` tinyint(1) NOT NULL DEFAULT 1");
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `FK_f56f4853e7c05b8bbf8dece633a` FOREIGN KEY (`id_relationship`) REFERENCES `contact_relationship`(`id_relationship`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `FK_5646e47ba79c43b93f8dbb2c68c` FOREIGN KEY (`id_quality_relationship`) REFERENCES `contact_relationship`(`id_relationship`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contacts` DROP FOREIGN KEY `FK_5646e47ba79c43b93f8dbb2c68c`");
        await queryRunner.query("ALTER TABLE `contacts` DROP FOREIGN KEY `FK_f56f4853e7c05b8bbf8dece633a`");
        await queryRunner.query("ALTER TABLE `countries` CHANGE `flag` `flag` tinyint(1) NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `countries` DROP COLUMN `iso2`");
        await queryRunner.query("ALTER TABLE `countries` ADD `iso2` char(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `countries` DROP COLUMN `iso3`");
        await queryRunner.query("ALTER TABLE `countries` ADD `iso3` char(3) NOT NULL");
        await queryRunner.query("ALTER TABLE `states` CHANGE `flag` `flag` tinyint(1) NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `states` DROP COLUMN `country_code`");
        await queryRunner.query("ALTER TABLE `states` ADD `country_code` char(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `cities` CHANGE `flag` `flag` tinyint(1) NOT NULL DEFAULT '1'");
        await queryRunner.query("ALTER TABLE `cities` DROP COLUMN `country_code`");
        await queryRunner.query("ALTER TABLE `cities` ADD `country_code` char(2) NOT NULL");
        await queryRunner.query("ALTER TABLE `contacts` DROP COLUMN `id_quality_relationship`");
        await queryRunner.query("ALTER TABLE `contacts` DROP COLUMN `id_relationship`");
        await queryRunner.query("ALTER TABLE `contacts` DROP COLUMN `email`");
        await queryRunner.query("DROP TABLE `contact_quality_relationship`");
        await queryRunner.query("DROP TABLE `contact_relationship`");
    }

}
