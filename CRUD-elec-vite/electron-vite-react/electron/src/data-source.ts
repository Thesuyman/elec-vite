import { DataSource } from 'typeorm';
import { User } from './entity/User';


export const AppDataSource = new DataSource({
    type: 'better-sqlite3',
    database: './database.sqlite',
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    });
