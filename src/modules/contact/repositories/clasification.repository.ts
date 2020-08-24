import { Repository, EntityRepository } from "typeorm";
import { ClasificationEntity } from "../entities/clasification.entity";

@EntityRepository(ClasificationEntity)
export class ClasificationRepository extends Repository<ClasificationEntity> {

}