import { Repository, EntityRepository } from "typeorm";
import { TitleEntity } from "../entities/title.entity";

@EntityRepository(TitleEntity)
export class TitleRepository extends Repository<TitleEntity> {

}