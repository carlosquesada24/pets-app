import React, { createContext, useContext, useEffect, useState } from "react";
import { PET_EMPTY_STATE, PET_LIST_DEFAULT_STATE } from "../../domain/data";
import {
  Allergy,
  Diagnosis,
  FormPet,
  Medicine,
  Pet,
  Vaccine,
} from "../../domain/interface";
import { randomUUID } from "expo-crypto";
import { useSQLiteContext } from "expo-sqlite";
import {
  deletePetIntoSQLite,
  getAllPetsFromSQLite,
  getPetByIdFromSQLite,
  savePetIntoSQLite,
  updatePetIntoSQLite,
} from "../repositories/petsRepository";
import { formPetToPetAdapter } from "../adapters/petAdapter";

interface PetsContextData {
  petsList: any[];
  newPet: Pet;
  getAllPets: () => void;
  getPetById: (id: number) => Promise<Pet>;
  addPet: (formValues: FormPet) => void;
  updatePet: (updatedPet: any) => void;

  createNewDiagnose: () => void;
  editDiagnose: (id: string, text: string) => void;

  createNewMedicine: () => void;
  editMedicine: (id: string, text: string) => void;

  createNewVaccine: () => void;
  editVaccine: (id: string, text: string) => void;

  createNewAllergy: () => void;
  editAllergy: (id: string, text: string) => void;
}

export const PetsContext = createContext<PetsContextData>({
  petsList: [],
  newPet: PET_EMPTY_STATE,
  getAllPets: () => {},
  getPetById: (id: number) => {
    return Promise.resolve(PET_EMPTY_STATE);
  },
  addPet: () => {},
  updatePet: (updatedPet: any) => {},

  createNewDiagnose: () => {},
  editDiagnose: (id: string, text: string) => {},

  createNewMedicine: () => {},
  editMedicine: (id: string, text: string) => {},

  createNewVaccine: () => {},
  editVaccine: (id: string, text: string) => {},

  createNewAllergy: () => {},
  editAllergy: (id: string, text: string) => {},
});

export const PetsProvider: React.FC<{ children: any }> = ({ children }) => {
  const [petsList, setPetsList] = useState<any[]>([]);
  const [newPet, setNewPet] = useState<Pet>(PET_EMPTY_STATE);

  const db = useSQLiteContext();

  useEffect(() => {
    getAllPets();
  }, []);

  useEffect(() => {
    getAllPets();
  }, [newPet]);

  const getAllPets = () => {
    getAllPetsFromSQLite(db)
      .then((result: any) => {
        setPetsList(result);
      })
      .catch((err: any) => {
        console.log({ err });
      });
  };

  const getPetById = (id: number): Promise<Pet> => {
    return getPetByIdFromSQLite(id, db);
  };

  const addPet = async (formValues: any) => {
    const petToSave = formPetToPetAdapter({
      ...formValues,
      photoURL:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/15665/production/_107435678_perro1.jpg.webp",
    });

    const id = await savePetIntoSQLite(petToSave, db);

    setNewPet({
      ...petToSave,
      id: id.toString(),
    });
  };

  const updatePet = async (updatedPet: any) => {
    const petToSave = {
      ...updatePet,
      isCreating: false,
      details: PET_LIST_DEFAULT_STATE[0].details,
    };

    await updatePetIntoSQLite(petToSave as Pet, newPet.id, db);

    setNewPet(PET_EMPTY_STATE);
    setPetsList([...petsList, updatedPet]);
  };

  const deletePetById = async (id: string) => {
    await deletePetIntoSQLite(id, db);
  };

  const createNewDiagnose = () => {
    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          diagnoses: [
            ...newPet.details.medical.diagnoses,
            {
              id: randomUUID(),
              date: "19/08/2024",
              text: "New Diagnose",
              isEditing: true,
            },
          ],
        },
      },
    });
  };
  const editDiagnose = (id: string, text: string) => {
    const diagnosesListFound = newPet.details.medical.diagnoses.find(
      (diagnose) => diagnose.id === id
    ) as Diagnosis;

    const updatedDiagnose: Diagnosis = {
      ...diagnosesListFound,
      text,
      isEditing: false,
    };

    const newDiagosesList = newPet.details.medical.diagnoses.map((diagnose) =>
      diagnose.id === updatedDiagnose.id ? updatedDiagnose : diagnose
    );

    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          diagnoses: newDiagosesList,
        },
      },
    });
  };

  const createNewMedicine = () => {
    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          medicines: [
            ...newPet.details.medical.medicines,
            {
              id: randomUUID(),
              date: "19/08/2024",
              name: "New Diagnose",
              dosage: "",
              frequency: "",
              isEditing: true,
            },
          ],
        },
      },
    });
  };
  const editMedicine = (id: string, text: string) => {
    const medicinesListFound = newPet.details.medical.medicines.find(
      (diagnose) => diagnose.id === id
    ) as Medicine;

    const updatedMedicine: Medicine = {
      ...medicinesListFound,
      name: text,
      isEditing: false,
    };

    const newMedicinesList = newPet.details.medical.medicines.map((medicine) =>
      medicine.id === updatedMedicine.id ? updatedMedicine : medicine
    );

    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          medicines: newMedicinesList,
        },
      },
    });
  };

  const createNewVaccine = () => {
    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          vaccines: [
            ...newPet.details.medical.vaccines,
            {
              id: randomUUID(),
              date: "19/08/2024",
              name: "New Diagnose",
              isEditing: true,
            },
          ],
        },
      },
    });
  };
  const editVaccine = (id: string, text: string) => {
    const vaccinesListFound = newPet.details.medical.vaccines.find(
      (vaccine) => vaccine.id === id
    ) as Vaccine;

    const updatedVaccine: Vaccine = {
      ...vaccinesListFound,
      name: text,
      isEditing: false,
    };

    const newVaccinesList = newPet.details.medical.vaccines.map((vaccine) =>
      vaccine.id === updatedVaccine.id ? updatedVaccine : vaccine
    );

    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          vaccines: newVaccinesList,
        },
      },
    });
  };

  const createNewAllergy = () => {
    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          allergies: [
            ...newPet.details.medical.allergies,
            {
              id: randomUUID(),
              date: "19/08/2024",
              name: "New Diagnose",
              isEditing: true,
            },
          ],
        },
      },
    });
  };
  const editAllergy = (id: string, text: string) => {
    const allergiesListFound = newPet.details.medical.allergies.find(
      (allergy) => allergy.id === id
    ) as Allergy;

    const updatedAllergy: Allergy = {
      ...allergiesListFound,
      name: text,
      isEditing: false,
    };

    const newAllergiesList = newPet.details.medical.allergies.map((allergy) =>
      allergy.id === updatedAllergy.id ? updatedAllergy : allergy
    );

    setNewPet({
      ...newPet,
      details: {
        ...newPet.details,
        medical: {
          ...newPet.details.medical,
          allergies: newAllergiesList,
        },
      },
    });
  };

  const contextValue = {
    petsList,
    newPet,
    getAllPets,
    getPetById,
    addPet,
    updatePet,

    createNewDiagnose,
    editDiagnose,

    createNewMedicine,
    editMedicine,

    createNewVaccine,
    editVaccine,

    createNewAllergy,
    editAllergy,
  };

  return (
    <PetsContext.Provider value={contextValue}>{children}</PetsContext.Provider>
  );
};

export const usePets = (): PetsContextData => {
  const context = useContext(PetsContext);
  if (!context) {
    throw new Error("usePets must be used within a PetsProvider");
  }
  return context;
};
