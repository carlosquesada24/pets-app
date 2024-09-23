import { SQLiteDatabase } from "expo-sqlite";
import { DELETE_ALL_TABLES, INITIALIZE_DB } from "./queries/pets";


export const initializeDatabase = async (db: SQLiteDatabase) => {
    try {

        db.execAsync(DELETE_ALL_TABLES)
            .then((result: any) => {
                console.log({ result: result });
            })
            .catch((err: any) => {
                console.log({ err });
            });

        await db.execAsync(INITIALIZE_DB);

        console.log("DB INITIALIZED!")
    } catch (err) {
        console.log("Error while initialize the DB: ", err)
    }
}