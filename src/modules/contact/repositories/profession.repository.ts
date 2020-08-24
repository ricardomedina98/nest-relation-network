import { Repository, EntityRepository } from "typeorm";
import { ProfessionEntity } from "../entities/profession.entity";

@EntityRepository(ProfessionEntity)
export class ProfessionRepository extends Repository<ProfessionEntity> {

}