export interface Diagnosis {
    id: string;
    date: string;
    text: string;
    isCreating: boolean;
}

export interface Allergy {
    id: string
    date: string;
    name: string;
    isCreating: boolean;
}

export interface Medicine {
    id: string
    date: string;
    name: string;
    dosage: string;
    frequency: string;
    isCreating: boolean;
}

export interface Vaccine {
    id: string
    name: string;
    date: string;
    isCreating: boolean;
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