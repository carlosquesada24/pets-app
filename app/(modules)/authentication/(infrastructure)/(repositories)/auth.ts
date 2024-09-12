import { SQLiteDatabase } from "expo-sqlite";

export const signUpSQLite = async (email: string, password: string, db: SQLiteDatabase) => {
    const resultUserInsertion: any = await db.runAsync(
        ` INSERT INTO Users (email, password, isActive, createdAt, updatedAt)
        VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
        [
            email,
            password,
            1,
        ]
    );

    const savedUser = resultUserInsertion?.lastInsertRowId

    return savedUser;
};

export const signInSQLite = async (email: string, password: string, db: SQLiteDatabase) => {
    const resultUser: any = await db.getFirstAsync(
        `SELECT * FROM Users WHERE email = ?`, [email]
    );

    const userExists = resultUser === null

    if (!userExists) {
        console.log({ error: "No existe un usuario con ese correo o con esa contraseña" })
        return
    }

    const userPassword = resultUser?.password
    const isSamePassword = userPassword === password

    if (!isSamePassword) {
        console.log({ error: "Las contraseñas no coinciden" })
        return
    }

    return resultUser;
};