import { Seeder, Factory } from 'typeorm-seeding'
import { UserEntity } from '../../modules/user/user.entity';
import { RoleRepositry } from "../../modules/role/role.repository";
import { RoleEntity } from "../../modules/role/role.entity";
import { Connection } from 'typeorm'
import { RoleType } from 'src/modules/role/role-type.enum';

export default class CreateUsers implements Seeder {

    public async run(factory: Factory, connection: Connection): Promise<void> {

        const roles = Object.keys(RoleType);
        
        for (const role of roles) {
            await factory(RoleEntity)({ name: role, description: `Description of ${role}`}).create();
        }

        const roleAdmin = await connection.getCustomRepository(RoleRepositry).findOne({ where: { name: RoleType.ADMIN } });
        const roleGeneral = await connection.getCustomRepository(RoleRepositry).findOne({ where: { name: RoleType.GENERAL } });

        
        await factory(UserEntity)({ role: roleAdmin, password: "admin" }).create({ username: "admin" });  
        await factory(UserEntity)({ role: roleGeneral, password: "general" }).create({ username: "general" });  
        
        await factory(UserEntity)({ role: roleAdmin, password: "admin" }).createMany(5);
        await factory(UserEntity)({ role: roleGeneral, password: "general" }).createMany(5);  

    }
}