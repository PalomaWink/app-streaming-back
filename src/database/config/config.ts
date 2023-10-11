import { Options } from "sequelize";

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3308,
  dialect: 'mysql',
}

export default config;