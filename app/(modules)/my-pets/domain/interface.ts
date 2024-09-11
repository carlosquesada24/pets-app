export interface Diagnosis {
    id: string;
    date: string;
    text: string;
    isEditing: boolean;
}

export interface Allergy {
    id: string
    date: string;
    name: string;
    isEditing: boolean;
}

export interface Medicine {
    id: string
    date: string;
    name: string;
    dosage: string;
    frequency: string;
    isEditing: boolean;
}

export interface Vaccine {
    id: string
    name: string;
    date: string;
    isEditing: boolean;
}

export interface Medical {
    diagnoses: Diagnosis[];
    allergies: Allergy[];
    medicines: Medicine[];
    vaccines: Vaccine[];
}

export interface Information {
    height: string;
    weight: string;
    age: string;
    breed: string;
}

export interface PetDetails {
    information: Information;
    medical: Medical;
}

export interface Pet {
    id: string;
    name: string;
    photoURL: string;
    isCreating: boolean
    creationDate: string
    details: PetDetails;
}

export interface FormPet {
    name: string
    weight: string
    height: string
    age: string
    breed: string

    photoURL: string

    diagnoses: DataListItem[],
    allergies: DataListItem[],
    vaccines: DataListItem[],
    medicines: DataListItem[],
}

export interface PetSQLite {
    age: number
    breed: string,
    createdAt: string,
    height: number,
    id: number,
    isActive: number,
    name: string,
    photoURL: string,
    updatedAt: string,
    weight: number
}

export interface DataListItem {
    id: string;
    date: string;
    text: string;
    isEditing: boolean
}