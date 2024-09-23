export const CREATE_ALL_TABLES =
    `
    PRAGMA journal_mode = WAL;
CREATE TABLE IF NOT EXISTS Pets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    weight INTEGER,
    height INTEGER,
    breed TEXT,
    age INTEGER,
    photoURL TEXT,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Diagnosis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Medicines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    dosage TEXT,
    frequency TEXT,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Vaccines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Allergies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS PetsDiagnosis (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    petId INTEGER NOT NULL,
    diagnosisId INTEGER NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(petId) REFERENCES Pets(id),
    FOREIGN KEY(diagnosisId) REFERENCES Diagnosis(id)
);

CREATE TABLE IF NOT EXISTS PetsMedicines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    petId INTEGER NOT NULL,
    medicineId INTEGER NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(petId) REFERENCES Pets(id),
    FOREIGN KEY(medicineId) REFERENCES Medicines(id)
);

CREATE TABLE IF NOT EXISTS PetsVaccines (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    petId INTEGER NOT NULL,
    vaccineId INTEGER NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(petId) REFERENCES Pets(id),
    FOREIGN KEY(vaccineId) REFERENCES Vaccines(id)
);

CREATE TABLE IF NOT EXISTS PetsAllergies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    petId INTEGER NOT NULL,
    allergyId INTEGER NOT NULL,
    isActive BOOLEAN NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(petId) REFERENCES Pets(id),
    FOREIGN KEY(allergyId) REFERENCES Allergies(id)
);

CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    isActive BOOLEAN NOT NULL DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
`

export const CREATE_EXAMPLE_DATA = `
    INSERT INTO Diagnosis (text, isActive) VALUES ('Hip Dysplasia', 1);
    INSERT INTO Diagnosis (text, isActive) VALUES ('Allergic Dermatitis', 1);
    INSERT INTO Diagnosis (text, isActive) VALUES ('Dental Disease', 1);

    INSERT INTO Medicines (name, description, dosage, frequency, isActive) VALUES ('Painkiller', 'Used to relieve pain', '50mg', 'Once a day', 1);
    INSERT INTO Medicines (name, description, dosage, frequency, isActive) VALUES ('Antihistamine', 'Used to treat allergies', '10mg', 'Twice a day', 1);
    INSERT INTO Medicines (name, description, dosage, frequency, isActive) VALUES ('Antibiotic', 'Used to treat infections', '100mg', 'Once a day', 1);

    INSERT INTO Vaccines (name, isActive) VALUES ('Rabies Vaccine', 1);
    INSERT INTO Vaccines (name, isActive) VALUES ('Parvovirus Vaccine', 1);
    INSERT INTO Vaccines (name, isActive) VALUES ('Distemper Vaccine', 1);

    INSERT INTO Allergies (name, isActive) VALUES ('Pollen Allergy', 1);
    INSERT INTO Allergies (name, isActive) VALUES ('Food Allergy', 1);
    INSERT INTO Allergies (name, isActive) VALUES ('Flea Allergy', 1);

    INSERT INTO Users (email, password, isActive, createdAt, updatedAt)
    VALUES ('johndoe@example.com', 'password123#', 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
`

export const CREATE_EXAMPLE_PETS = `
    INSERT INTO Pets (name, weight, height, breed, age, photoURL, isActive) 
    VALUES ('Perro 1', 30, 60, 'Golden Retriever', 5, 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg', 1);

    INSERT INTO Pets (name, weight, height, breed, age, photoURL, isActive) 
    VALUES ('Perro 2', 4, 25, 'Tabby Cat', 3, 'https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal.jpg', 1);

    INSERT INTO Pets (name, weight, height, breed, age, photoURL, isActive) 
    VALUES ('Perro 3', 2, 20, 'Pomeranian', 2, 'https://www.nunpet.es/blog/wp-content/uploads/2023/08/5-razas-populares-perros-labrador-pastor-aleman.webp', 1);

    INSERT INTO PetsDiagnosis (petId, diagnosisId, isActive) VALUES (1, 1, 1); -- Buddy has Hip Dysplasia
    INSERT INTO PetsDiagnosis (petId, diagnosisId, isActive) VALUES (2, 2, 1); -- Whiskers has Allergic Dermatitis
    INSERT INTO PetsDiagnosis (petId, diagnosisId, isActive) VALUES (3, 3, 1); -- Fluffy has Dental Disease

    INSERT INTO PetsMedicines (petId, medicineId, isActive) VALUES (1, 1, 1); -- Buddy is taking Painkiller
    INSERT INTO PetsMedicines (petId, medicineId, isActive) VALUES (2, 2, 1); -- Whiskers is taking Antihistamine
    INSERT INTO PetsMedicines (petId, medicineId, isActive) VALUES (3, 3, 1); -- Fluffy is taking Antibiotic

    INSERT INTO PetsVaccines (petId, vaccineId, isActive) VALUES (1, 1, 1); -- Buddy received Rabies Vaccine
    INSERT INTO PetsVaccines (petId, vaccineId, isActive) VALUES (2, 2, 1); -- Whiskers received Parvovirus Vaccine
    INSERT INTO PetsVaccines (petId, vaccineId, isActive) VALUES (3, 3, 1); -- Fluffy received Distemper Vaccine

    INSERT INTO PetsAllergies (petId, allergyId, isActive) VALUES (1, 1, 1); -- Buddy has Pollen Allergy
    INSERT INTO PetsAllergies (petId, allergyId, isActive) VALUES (2, 2, 1); -- Whiskers has Food Allergy
    INSERT INTO PetsAllergies (petId, allergyId, isActive) VALUES (3, 3, 1); -- Fluffy has Flea Allergy
`


export const INITIALIZE_DB = `
    ${CREATE_ALL_TABLES}
    ${CREATE_EXAMPLE_DATA}
    
`

export const DELETE_ALL_TABLES = `
DROP TABLE IF EXISTS PetsDiagnosis;
DROP TABLE IF EXISTS PetsMedicines;
DROP TABLE IF EXISTS PetsVaccines;
DROP TABLE IF EXISTS PetsAllergies;
DROP TABLE IF EXISTS Diagnosis;
DROP TABLE IF EXISTS Medicines;
DROP TABLE IF EXISTS Vaccines;
DROP TABLE IF EXISTS Allergies;
DROP TABLE IF EXISTS Pets;
DROP TABLE IF EXISTS Users;
`