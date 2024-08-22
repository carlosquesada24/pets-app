

export const initializeDatabase = async (db: any) => {
    try {
        await db.execAsync(`
           CREATE TABLE IF NOT EXISTS Pets (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                isActive BOOLEAN NOT NULL,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `);

        await db.execAsync(`
            INSERT INTO Pets (name, isActive) VALUES ('Buddy', 1);
            INSERT INTO Pets (name, isActive) VALUES ('Whiskers', 1);
            INSERT INTO Pets (name, isActive) VALUES ('Fluffy', 0);
        `);

        console.log("DB INITIALIZED!")
    } catch (err) {
        console.log("Error while initialize the DB: ", err)
    }
}