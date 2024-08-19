import { randomUUID } from "expo-crypto";
import { Allergy, Diagnosis, Medicine, Pet, Vaccine } from "./interface";

export const PET_EMPTY_STATE: Pet = {
    id: "",
    name: "",
    photoURL: "",
    creationDate: "",
    isCreating: false,
    details: {
        information: {
            height: "",
            weight: "",
            age: "",
            breed: ""
        },
        medical: {
            diagnoses: [] as Diagnosis[],
            allergies: [] as Allergy[],
            medicines: [] as Medicine[],
            vaccines: [] as Vaccine[]
        }
    }
};

export const PET_DEFAULT_STATE: Pet = {
    id: "pet1",
    name: "Pet 1",
    isCreating: false,
    creationDate: "",
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2vMOlB47SpcrTcp9SJxwg4wq81aTxFDJpQ&s",
    details: {
        information: {
            height: "120 cm",
            weight: "12 kg",
            age: "5 years old",
            breed: "American Stafford"
        },
        medical: {
            diagnoses: [
                {
                    date: "01/01/2024",
                    text: "Diagnosis 1",
                    id: randomUUID(),
                    isCreating: false
                },
                {
                    date: "02/01/2024",
                    text: "Diagnosis 2",
                    id: randomUUID(),
                    isCreating: false
                }
            ],
            allergies: [
                {
                    name: "Pollen Allergy",
                    id: randomUUID(),
                    isCreating: false,
                    date: "02/01/2024",
                }
            ],
            medicines: [
                {
                    name: "Medicine A",
                    dosage: "10 mg",
                    frequency: "Once a day",
                    id: randomUUID(),
                    isCreating: false,
                    date: "02/01/2024",
                }
            ],
            vaccines: [
                {
                    name: "Rabies",
                    date: "15/06/2023",
                    id: randomUUID(),
                    isCreating: false,
                }
            ]
        }
    }
};

export const PET_LIST_DEFAULT_STATE: Pet[] = [{
    id: "pet1",
    name: "Pet 1",
    isCreating: false,
    creationDate: "",
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2vMOlB47SpcrTcp9SJxwg4wq81aTxFDJpQ&s",
    details: {
        information: {
            height: "120 cm",
            weight: "12 kg",
            age: "5 years old",
            breed: "American Stafford"
        },
        medical: {
            diagnoses: [
                {
                    date: "01/01/2024",
                    text: "Diagnosis 1",
                    id: randomUUID(),
                    isCreating: false
                },
                {
                    date: "02/01/2024",
                    text: "Diagnosis 2",
                    id: randomUUID(),
                    isCreating: false
                }
            ],
            allergies: [
                {
                    name: "Pollen Allergy",
                    id: randomUUID(),
                    isCreating: false,
                    date: "02/01/2024",
                }
            ],
            medicines: [
                {
                    name: "Medicine A",
                    dosage: "10 mg",
                    frequency: "Once a day",
                    id: randomUUID(),
                    isCreating: false,
                    date: "02/01/2024",
                }
            ],
            vaccines: [
                {
                    name: "Rabies",
                    date: "15/06/2023",
                    id: randomUUID(),
                    isCreating: false,
                }
            ]
        }
    }
}, {
    id: "pet2",
    name: "Pet 2",
    isCreating: false,
    creationDate: "",
    photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2vMOlB47SpcrTcp9SJxwg4wq81aTxFDJpQ&s",
    details: {
        information: {
            height: "120 cm",
            weight: "12 kg",
            age: "5 years old",
            breed: "American Stafford"
        },
        medical: {
            diagnoses: [
                {
                    date: "01/01/2024",
                    text: "Diagnosis 1",
                    id: randomUUID(),
                    isCreating: false
                },
                {
                    date: "02/01/2024",
                    text: "Diagnosis 2",
                    id: randomUUID(),
                    isCreating: false
                }
            ],
            allergies: [
                {
                    name: "Pollen Allergy",
                    id: randomUUID(),
                    isCreating: false,
                    date: "02/01/2024",
                }
            ],
            medicines: [
                {
                    name: "Medicine A",
                    dosage: "10 mg",
                    frequency: "Once a day",
                    id: randomUUID(),
                    isCreating: false,
                    date: "02/01/2024",
                }
            ],
            vaccines: [
                {
                    name: "Rabies",
                    date: "15/06/2023",
                    id: randomUUID(),
                    isCreating: false,
                }
            ]
        }
    }
}]
