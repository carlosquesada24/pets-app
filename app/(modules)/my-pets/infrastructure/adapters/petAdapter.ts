import { randomUUID } from "expo-crypto";
import { FormPet, Pet, PetSQLite } from "../../domain/interface";
import { formatDate } from "../../../../utils/date";

export const formPetToPetAdapter = (inputPet: FormPet): Pet => {
    return {
        id: randomUUID(),
        name: inputPet?.name ?? "",
        isCreating: false,
        creationDate: formatDate(new Date()),
        photoURL: inputPet?.photoURL ?? "",
        details: {
            information: {
                height: inputPet?.height ?? 0,
                weight: inputPet?.weight ?? 0,
                age: inputPet?.age ?? 0,
                breed: inputPet?.breed ?? ""
            },
            medical: {
                diagnoses: inputPet?.diagnoses?.map(diagnosis => ({
                    ...diagnosis,
                    id: randomUUID(),
                    isEditing: false
                })),
                allergies: inputPet?.allergies?.map(allergy => ({
                    ...allergy,
                    id: randomUUID(),
                    name: allergy?.text ?? "",
                    isEditing: false
                })),
                medicines: inputPet?.medicines?.map(medicine => ({
                    ...medicine,
                    id: randomUUID(),
                    name: medicine?.text ?? "",
                    dosage: "",
                    frequency: "",
                    isEditing: false
                })),
                vaccines: inputPet?.vaccines?.map(vaccine => ({
                    ...vaccine,
                    id: randomUUID(),
                    name: vaccine?.text ?? "",
                    isEditing: false
                }))
            }
        }
    };
}

export const PetSQLiteToPetAdapter = (inputPet: PetSQLite, medicalInformation: any): Pet => {
    return {
        id: inputPet.id.toString(),
        name: inputPet?.name ?? "",
        isCreating: false,
        creationDate: inputPet.createdAt, // I've to format it
        photoURL: inputPet?.photoURL ?? "",
        details: {
            information: {
                height: inputPet?.height.toString() ?? 0,
                weight: inputPet?.weight.toString() ?? 0,
                age: inputPet?.age.toString() ?? 0,
                breed: inputPet?.breed ?? ""
            },
            medical: {
                diagnoses: medicalInformation?.diagnoses?.map((diagnosis: any) => ({
                    ...diagnosis,
                    id: diagnosis.id.toString(),
                    isEditing: false
                })),
                allergies: medicalInformation?.allergies?.map((allergy: any) => ({
                    ...allergy,
                    id: allergy.id.toString(),
                    isEditing: false
                })),
                medicines: medicalInformation?.medicines?.map((medicine: any) => ({
                    ...medicine,
                    id: medicine.id.toString(),
                    isEditing: false
                })),
                vaccines: medicalInformation?.vaccines?.map((vaccine: any) => ({
                    ...vaccine,
                    id: vaccine.id.toString(),
                    isEditing: false
                })),
            }
        }
    };
}