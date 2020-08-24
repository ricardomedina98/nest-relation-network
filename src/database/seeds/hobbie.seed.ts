import { Seeder, Factory } from 'typeorm-seeding'
import { hobbies } from "../data/hobbies";
import { HobbieEntity } from 'src/modules/contact/entities/hobbie.entity';
import { HobbieRepository } from 'src/modules/contact/repositories/hobbie.repository';
import { Connection } from 'typeorm';

export default class CreateHobbies implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const hobbie of hobbies) {
            const hobbieNew = connection.getCustomRepository(HobbieRepository).create({name: hobbie});
            await connection.getCustomRepository(HobbieRepository).save(hobbieNew);
        }

    }
}