import { Connection } from 'typeorm';
import { Seeder, Factory } from 'typeorm-seeding'
import { clasifications } from "../data/clasifications";
import { ClasificationRepository } from 'src/modules/contact/repositories/clasification.repository';

export default class CreateClasifications implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const clasification of clasifications) {
            const clasificationNew = connection.getCustomRepository(ClasificationRepository).create({name: clasification});
            await connection.getCustomRepository(ClasificationRepository).save(clasificationNew);
        }

    }
}