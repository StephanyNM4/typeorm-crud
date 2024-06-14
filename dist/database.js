"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: '192.185.4.20',
    username: 'erigoing_prueba1',
    password: 'iM50LIn7tz',
    port: 3306,
    database: 'erigoing_db_prueba1',
    entities: [],
    logging: true
});
