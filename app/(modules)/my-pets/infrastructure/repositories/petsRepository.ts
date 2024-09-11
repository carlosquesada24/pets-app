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


    const getDiagnosesByPetIdResult: any = await db.getAllAsync(
        `SELECT Diagnosis.id, Diagnosis.text, Diagnosis.isActive, Diagnosis.createdAt, Diagnosis.updatedAt
        FROM Diagnosis
        INNER JOIN PetsDiagnosis ON PetsDiagnosis.diagnosisId = Diagnosis.id
        WHERE PetsDiagnosis.petId = ?;`
        , [petId]);

    const getVaccinesByPetIdResult: any = await db.getAllAsync(
        `SELECT Vaccines.id, Vaccines.name, Vaccines.isActive, Vaccines.createdAt, Vaccines.updatedAt
        FROM Vaccines
        INNER JOIN PetsVaccines ON PetsVaccines.vaccineId = Vaccines.id
        WHERE PetsVaccines.petId = ?;`
        , [petId]);

    const getMedicinesByPetIdResult: any = await db.getAllAsync(
        `SELECT Medicines.id, Medicines.name, Medicines.description, Medicines.dosage, Medicines.frequency, Medicines.isActive, Medicines.createdAt, Medicines.updatedAt
        FROM Medicines
        INNER JOIN PetsMedicines ON PetsMedicines.medicineId = Medicines.id
        WHERE PetsMedicines.petId = ?;`
        , [petId]);


    const formattedPet = PetSQLiteToPetAdapter(
        getPetResult,
        {
            allergies: getAllergyByPetIdResult,
            diagnoses: getDiagnosesByPetIdResult,
            vaccines: getVaccinesByPetIdResult,
            medicines: getMedicinesByPetIdResult
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
    const allergiesPromises = pet.details.medical.allergies.map(async (allergy) => {
        return await db.runAsync(
            `INSERT INTO Allergies (name, isActive, createdAt, updatedAt)
            VALUES (?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
            [
                allergy.name,
            ]
        );
    });
    const resultsAllergiesPromises = await Promise.all(allergiesPromises);

    const petAllergiesPromises = resultsAllergiesPromises.map(async (result) => {
        return await db.runAsync(
            `INSERT INTO PetsAllergies (petId, allergyId, isActive, createdAt, updatedAt)
            VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                savedPetId,
                result?.lastInsertRowId
            ]
        );
    });
    const resultsPetAllergiesPromises = await Promise.all(petAllergiesPromises);

    // Map de diagnoses
    const diagnosesPromises = pet.details.medical.diagnoses.map(async (diagnose) => {
        return await db.runAsync(
            `INSERT INTO Diagnosis (text, isActive, createdAt, updatedAt)
            VALUES (?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                diagnose.text,
            ]
        );
    });
    const resultsDiagnosesPromises = await Promise.all(diagnosesPromises);

    const petDiagnosesPromises = resultsDiagnosesPromises.map(async (result) => {
        return await db.runAsync(
            `INSERT INTO PetsDiagnosis (petId, diagnosisId, isActive, createdAt, updatedAt)
            VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                savedPetId,
                result?.lastInsertRowId
            ]
        );
    });
    const resultsPetDiagnosesPromises = await Promise.all(petDiagnosesPromises);

    // Map de medicines
    const medicinesPromises = pet.details.medical.medicines.map(async (medicine) => {
        return await db.runAsync(
            `INSERT INTO Medicines (name, description, dosage, frequency, isActive, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                medicine.name,
                "",
                "",
                "",
            ]
        );
    });
    const resultsMedicinePromises = await Promise.all(medicinesPromises);

    const petMedicinesPromises = resultsMedicinePromises.map(async (result) => {
        return await db.runAsync(
            `INSERT INTO PetsMedicines (petId, medicineId, isActive, createdAt, updatedAt)
            VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                savedPetId,
                result?.lastInsertRowId
            ]
        );
    });
    const resultsPetMedicinesPromises = await Promise.all(petMedicinesPromises);

    // Map de vaccines
    const vaccinesPromises = pet.details.medical.vaccines.map(async (vaccine) => {
        return await db.runAsync(
            `INSERT INTO Vaccines (name, isActive, createdAt, updatedAt)
            VALUES (?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                vaccine.name,
            ]
        );
    });
    const resultsVaccinesPromises = await Promise.all(vaccinesPromises);

    const petVaccinesPromises = resultsVaccinesPromises.map(async (result) => {
        return await db.runAsync(
            `INSERT INTO PetsVaccines (petId, vaccineId, isActive, createdAt, updatedAt)
            VALUES (?, ?, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);`,
            [
                savedPetId,
                result?.lastInsertRowId
            ]
        );
    });
    const resultsPetVaccinesPromises = await Promise.all(petVaccinesPromises);

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