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