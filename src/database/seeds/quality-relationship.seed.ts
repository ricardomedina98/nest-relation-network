import { Seeder, Factory } from 'typeorm-seeding'
import { Connection } from 'typeorm'
import { qualitiesRelationships } from "../data/qualities-relationships";
import { QualityRelationshipRepository } from 'src/modules/contact/repositories/quality-relationship.repository';

export default class CreateQualityRelationship implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        for(const q_relationship of qualitiesRelationships) {
            await connection.getCustomRepository(QualityRelationshipRepository).save({name: q_relationship});
        }

    }
}