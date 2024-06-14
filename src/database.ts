import { DataSource } from 'typeorm';
import {User} from './entities/User'

export const AppDataSource = new DataSource({
    type: '',
    host: '',
    username: '',
    password: '',
    port: ,
    database: '',
    entities: [User],
    logging: true,
    synchronize: true
});