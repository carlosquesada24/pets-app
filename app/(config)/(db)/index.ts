import { INITIALIZE_DB } from "./queries/pets";


export const initializeDatabase = async (db: any) => {
    try {
        await db.execAsync(INITIALIZE_DB);

        console.log("DB INITIALIZED!")
    } catch (err) {
        console.log("Error while initialize the DB: ", err)
    }
}