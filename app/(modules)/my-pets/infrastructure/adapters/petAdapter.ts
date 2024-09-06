import { randomUUID } from "expo-crypto";
import { FormPet, Pet } from "../../domain/interface";
import { formatDate } from "../../../../utils/date";

export const petAdapter = (inputPet: FormPet): Pet => {

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