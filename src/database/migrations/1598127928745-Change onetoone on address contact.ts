import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeOnetooneOnAddressContact1598127928745 implements MigrationInterface {
    name = 'ChangeOnetooneOnAddressContact1598127928745'

    public async up(queryRunner: QueryRunner): Promise<void> {
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
        await queryRunner.query("ALTER TABLE `contacts` DROP FOREIGN KEY `FK_3014cd3e5892a3e3db09a1ff0e0`");
        await queryRunner.query("ALTER TABLE `contacts` ADD UNIQUE INDEX `IDX_3014cd3e5892a3e3db09a1ff0e` (`id_address`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3014cd3e5892a3e3db09a1ff0e` ON `contacts` (`id_address`)");
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `FK_3014cd3e5892a3e3db09a1ff0e0` FOREIGN KEY (`id_address`) REFERENCES `contact_address`(`id_address`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `contacts` DROP FOREIGN KEY `FK_3014cd3e5892a3e3db09a1ff0e0`");
        await queryRunner.query("DROP INDEX `REL_3014cd3e5892a3e3db09a1ff0e` ON `contacts`");
        await queryRunner.query("ALTER TABLE `contacts` DROP INDEX `IDX_3014cd3e5892a3e3db09a1ff0e`");
        await queryRunner.query("ALTER TABLE `contacts` ADD CONSTRAINT `FK_3014cd3e5892a3e3db09a1ff0e0` FOREIGN KEY (`id_address`) REFERENCES `contact_address`(`id_address`) ON DELETE NO ACTION ON UPDATE NO ACTION");
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
    }

}
