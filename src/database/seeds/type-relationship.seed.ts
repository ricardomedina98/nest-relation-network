import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { typesRelationships } from "../data/types-relationships";
import { TypeRelationshipRepository } from 'src/modules/contact/repositories/type-relationship.repository';

export default class CreateTypeRelationship implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const relationship of typesRelationships) {
            await connection.getCustomRepository(TypeRelationshipRepository).save({name: relationship});
        }

    }
}