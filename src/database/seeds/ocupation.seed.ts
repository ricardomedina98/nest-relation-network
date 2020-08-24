import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { ocupations } from "../data/ocupations";
import { OcupationEntity } from 'src/modules/contact/entities/ocupation.entity';
import { OcupationRepository } from 'src/modules/contact/repositories/ocupation.repository';

export default class CreateOcupations implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const ocupation of ocupations) {
            const ocupationNew = connection.getCustomRepository(OcupationRepository).create({name: ocupation});
            await connection.getCustomRepository(OcupationRepository).save(ocupationNew);
        }

    }
}