import { Repository, EntityRepository } from "typeorm";
import { ClasificationEntity } from "../entities/clasification.entity";
import { CivilStatusEntity } from "../entities/civil-status.entity";

@EntityRepository(CivilStatusEntity)
export class CivilStatusRepository extends Repository<CivilStatusEntity> {

}