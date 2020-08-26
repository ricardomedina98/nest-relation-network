import { Repository, EntityRepository } from "typeorm";
import { TypeRelationshipEntity } from "../entities/type-relationship.entity";

@EntityRepository(TypeRelationshipEntity)
export class TypeRelationshipRepository extends Repository<TypeRelationshipEntity> {

}