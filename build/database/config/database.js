"use strict";
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'db_app_streaming',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
module.exports = config;
//# sourceMappingURL=database.js.map