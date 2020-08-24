import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { professions } from "../data/professions";
import { ProfessionEntity } from 'src/modules/contact/entities/profession.entity';
import { ProfessionRepository } from 'src/modules/contact/repositories/profession.repository';

export default class CreateProfessions implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const profession of professions) {
            const professionNew = connection.getCustomRepository(ProfessionRepository).create({name: profession});
            await connection.getCustomRepository(ProfessionRepository).save(professionNew);
        }

    }
}