import {MigrationInterface, QueryRunner} from "typeorm";

export class newChanges1598130790599 implements MigrationInterface {
    name = 'newChanges1598130790599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contacts` DROP FOREIGN KEY `FK_f2e496faee6be33b41ab68eec0f`");
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
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `FK_f2e496faee6be33b41ab68eec0f` FOREIGN KEY (`id_civilstatus`) REFERENCES `contact_civilstatus`(`id_civilstatus`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contacts` DROP FOREIGN KEY `FK_f2e496faee6be33b41ab68eec0f`");
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
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `FK_f2e496faee6be33b41ab68eec0f` FOREIGN KEY (`id_civilstatus`) REFERENCES `contact_genders`(`id_gender`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
