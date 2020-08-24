import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';
import { ContactModule } from './modules/contact/contact.module';
import { WorldModule } from './modules/world/world.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UsersModule, AuthModule, RoleModule, ContactModule, WorldModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.APP_PORT);
  }
}
