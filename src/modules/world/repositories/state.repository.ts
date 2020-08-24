import { Repository, EntityRepository } from "typeorm";
import { StateEntity } from "../entities/state.entity";

@EntityRepository(StateEntity)
export class StateRepository extends Repository<StateEntity> {

}