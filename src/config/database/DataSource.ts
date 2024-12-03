import "reflect-metadata"
import { DataSource } from "typeorm"
import 'dotenv/config'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: true,
    entities: ["src/modules/**/models/*.ts"],
    migrations: ["src/modules/**/migrations/*.ts"],
    subscribers: [],
})
