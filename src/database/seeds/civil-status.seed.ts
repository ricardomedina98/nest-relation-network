import { Seeder, Factory } from 'typeorm-seeding'
import { civilStatuses } from "../data/civil-statuses";
import { Connection } from 'typeorm';
import { CivilStatusRepository } from 'src/modules/contact/repositories/civil-status.repository';

export default class CreateCivilStatus implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const civilStatus of civilStatuses) {
            const civilNew = connection.getCustomRepository(CivilStatusRepository).create({name: civilStatus});
            await connection.getCustomRepository(CivilStatusRepository).save(civilNew);
        }

    }
}