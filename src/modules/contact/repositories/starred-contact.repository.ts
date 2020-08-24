import { Repository, EntityRepository } from "typeorm";
import { StarredContactEntity } from "../entities/starred-contact.entity";

@EntityRepository(StarredContactEntity)
export class StarredContactRepository extends Repository<StarredContactEntity> {

}