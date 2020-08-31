import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
    private readonly envConfig: {[key: string]: string} 

    constructor(){
        const isDevelopmentEnv = process.env.NODE_ENV !== "production";

        if(isDevelopmentEnv) {
            const envFilePath = __dirname + '/../../.env';
            const existsPath = fs.existsSync(envFilePath);

            if(!existsPath) {
                console.log('.env file does not exist');
                process.exit(0);
            }

            this.envConfig = parse(fs.readFileSync(envFilePath));
        } else {
            this.envConfig = {
                APP_PORT: process.env.PORT,
                MYSQL_HOST: process.env.MYSQL_HOST,
                MYSQL_USERNAME: process.env.MYSQL_USERNAME,
                MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
                MYSQL_PORT: process.env.MYSQL_PORT,
                MYSQL_DATABASE: process.env.MYSQL_DATABASE,
                JWT_SECRET: process.env.JWT_SECRET,
                JWT_EXPIRE_IN: process.env.JWT_EXPIRE_IN,
            }
        }
    }

    get(key: string){
        return this.envConfig[key];
    }
}