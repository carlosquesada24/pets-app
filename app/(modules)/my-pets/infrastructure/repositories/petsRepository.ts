import { SQLiteDatabase } from "expo-sqlite";
import { Pet } from "../../domain/interface";


export const getAllPetsFromSQLite = async (db: SQLiteDatabase) => {
    const result = await db.getAllAsync("SELECT * FROM Pets");

    return result;
}

export const getPetByIdFromSQLite = async (id: string, db: SQLiteDatabase) => {
    const result: any = await db.getFirstAsync("SELECT * FROM Pets WHERE id = ?", [id]);

    if (result[0].rows.length > 0) {
        const pet = result[0].rows.item(0);
        console.log('Pet found:', pet);
        return pet;
    } else {
        console.log('No pet found with this id');
        return null;
    }

    // return result;
};

export const savePetIntoSQLite = async (pet: Pet, db: SQLiteDatabase) => {
    const result = await db.runAsync(
        `INSERT INTO Pets (name, weight, height, breed, age, photoURL, isActive, createdAt, updatedAt)
        VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))`,
        [
            pet.name,
            pet.details.information.weight,
            pet.details.information.height,
            pet.details.information.breed,
            pet.details.information.age,
            pet.photoURL,
            1,
        ]
    );

    console.log({ petAdded: result, id: result.lastInsertRowId });

    return result.lastInsertRowId;
};

export const updatePetIntoSQLite = async (updatedPet: Pet, id: string, db: SQLiteDatabase) => {
    await db.runAsync(
        `UPDATE Pets 
           SET name = ?, weight = ?, height = ?, breed = ?, age = ?, photoURL = ?, isActive = ?, updatedAt = datetime('now')
           WHERE id = ?`,
        [
            updatedPet.name,
            updatedPet.details.information.weight,
            updatedPet.details.information.height,
            updatedPet.details.information.breed,
            updatedPet.details.information.age,
            updatedPet.photoURL,
            1,
            id,
        ]
    );
};