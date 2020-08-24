import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding'
import { genders } from "../data/genders";
import { GenderRepository } from 'src/modules/contact/repositories/gender.repository';

export default class CreateGenders implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const gender of genders) {
            const genderNew = connection.getCustomRepository(GenderRepository).create({name: gender});
            await connection.getCustomRepository(GenderRepository).save(genderNew);
        }

    }
}