import { Repository, EntityRepository } from "typeorm";
import { HobbieEntity } from "../entities/hobbie.entity";

@EntityRepository(HobbieEntity)
export class HobbieRepository extends Repository<HobbieEntity> {

}