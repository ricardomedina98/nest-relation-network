import { Repository, EntityRepository } from "typeorm";
import { QualityRelationshipEntity } from "../entities/quality-relationship.entity";

@EntityRepository(QualityRelationshipEntity)
export class QualityRelationshipRepository extends Repository<QualityRelationshipEntity> {

}