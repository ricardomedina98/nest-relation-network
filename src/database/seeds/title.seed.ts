import { Seeder, Factory } from 'typeorm-seeding'
import { titles } from "../data/titles";
import { TitleEntity } from 'src/modules/contact/entities/title.entity';
import { Connection } from 'typeorm';
import { TitleRepository } from 'src/modules/contact/repositories/title.repository';

export default class CreateTitles implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const title of titles) {
            const titleNew = connection.getCustomRepository(TitleRepository).create({name: title});
            await connection.getCustomRepository(TitleRepository).save(titleNew);
        }

    }
}