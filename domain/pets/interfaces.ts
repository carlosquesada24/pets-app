export interface Diagnosis {
    date: string;
    text: string;
}

export interface Allergy {
    name: string;
}

export interface Medicine {
    name: string;
    dosage: string;
    frequency: string;
}

export interface Vaccine {
    name: string;
    date: string;
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
    details: PetDetails;
}