import { SQLiteDatabase } from "expo-sqlite";
import { Pet } from "../../domain/interface";
import { PetSQLiteToPetAdapter } from "../adapters/petAdapter";


export const getAllPetsFromSQLite = async (db: SQLiteDatabase) => {
    const result = await db.getAllAsync("SELECT * FROM Pets");

    const allAllergiesResult = await db.getAllAsync("SELECT * FROM Allergies");
    const allPetsAllergiesResult = await db.getAllAsync("SELECT * FROM PetsAllergies");

    return result;
}

export const getPetByIdFromSQLite = async (petId: number, db: SQLiteDatabase) => {
    const getPetResult: any = await db.getFirstAsync("SELECT * FROM Pets WHERE id = ?", [petId]);

    const getAllergyByPetIdResult: any = await db.getAllAsync(
        `SELECT Allergies.id, Allergies.name, Allergies.isActive, Allergies.createdAt, Allergies.updatedAt
            FROM Allergies
            INNER JOIN PetsAllergies ON PetsAllergies.allergyId = Allergies.id
            WHERE PetsAllergies.petId = ?`
        , [petId]);

    const formattedPet = PetSQLiteToPetAdapter(
        getPetResult,
        {
            allergies: getAllergyByPetIdResult,
            diagnoses: [],
            vaccines: [],
            medicines: []
        }
    );

    return formattedPet;
};

export const savePetIntoSQLite = async (pet: Pet, db: SQLiteDatabase) => {
    const resultPetInsertion: any = await db.runAsync(
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

    const savedPetId = resultPetInsertion?.lastInsertRowId

    // Map de allergies
    const resultAllergyInsertion: any = await db.runAsync(
        `INSERT INTO Allergies (name, isActive, createdAt, updatedAt)
        VALUES (?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
        [
            "Ejemplo estático 1", // allergy.name
        ]
    );
    const savedAllergyId = resultAllergyInsertion?.lastInsertRowId

    const resultsPetAllergyInsertion: any = await db.runAsync(
        `INSERT INTO PetsAllergies (petId, allergyId, isActive, createdAt, updatedAt)
        VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
        [
            savedPetId,
            savedAllergyId
        ]
    );

    return savedPetId;
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