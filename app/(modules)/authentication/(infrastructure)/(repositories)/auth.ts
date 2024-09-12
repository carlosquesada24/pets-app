import { SQLiteDatabase } from "expo-sqlite";
import { UserSQLite } from "../../(domain)/interfaces";
import { USER_SQLITE_EMPTY_STATE } from "../../(domain)/data";

export const signUpSQLite = async (email: string, password: string, db: SQLiteDatabase): Promise<UserSQLite> => {
    const resultUserInsertion = await db.getFirstAsync<UserSQLite | null>(
        ` INSERT INTO Users (email, password, isActive, createdAt, updatedAt)
        VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
        [
            email,
            password,
            1,
        ]
    );

    return resultUserInsertion ?? USER_SQLITE_EMPTY_STATE;
};

export const signInSQLite = async (email: string, password: string, db: SQLiteDatabase): Promise<UserSQLite> => {
    const resultUser = await db.getFirstAsync<UserSQLite | null>(
        `SELECT * FROM Users WHERE email = ?`, [email]
    );

    const userExists = resultUser !== null

    if (!userExists) {
        console.log({ error: "No existe un usuario con ese correo o con esa contraseña" })
    }

    const userPassword = resultUser?.password ?? ""
    const isSamePassword = userPassword === password

    if (!isSamePassword) {
        console.log({ error: "Las contraseñas no coinciden" })
    }

    return resultUser ?? USER_SQLITE_EMPTY_STATE;
};