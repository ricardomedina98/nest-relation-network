"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstMigration1593622019212 = void 0;
class firstMigration1593622019212 {
    constructor() {
        this.name = 'firstMigration1593622019212';
    }
    async up(queryRunner) {
        await queryRunner.query("CREATE TABLE `users_details` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `first_name` varchar(255) NOT NULL, `second_name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `status` varchar(8) NOT NULL DEFAULT 'ACTIVE', `created_at` timestamp NOT NULL, `updated_at` timestamp NOT NULL, `id_details` int NOT NULL, UNIQUE INDEX `IDX_97672ac88f789774dd47f7c8be` (`email`), UNIQUE INDEX `REL_7780155fc24b5d19a5d1336aca` (`id_details`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `users` ADD CONSTRAINT `FK_7780155fc24b5d19a5d1336aca0` FOREIGN KEY (`id_details`) REFERENCES `users_details`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }
    async down(queryRunner) {
        await queryRunner.query("ALTER TABLE `users` DROP FOREIGN KEY `FK_7780155fc24b5d19a5d1336aca0`");
        await queryRunner.query("DROP INDEX `REL_7780155fc24b5d19a5d1336aca` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_97672ac88f789774dd47f7c8be` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
        await queryRunner.query("DROP TABLE `users_details`");
    }
}
exports.firstMigration1593622019212 = firstMigration1593622019212;
//# sourceMappingURL=1593622019212-first_migration.js.map