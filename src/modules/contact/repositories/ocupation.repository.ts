import { Repository, EntityRepository } from "typeorm";
import { OcupationEntity } from "../entities/ocupation.entity";

@EntityRepository(OcupationEntity)
export class OcupationRepository extends Repository<OcupationEntity> {

}