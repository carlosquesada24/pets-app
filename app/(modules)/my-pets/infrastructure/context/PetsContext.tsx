import React, { createContext, useContext, useEffect, useState } from "react";
import { PET_EMPTY_STATE, PET_LIST_DEFAULT_STATE } from "../../domain/data";
import { Diagnosis, Pet } from "../../domain/interface";
import { randomUUID } from "expo-crypto";

interface PetsContextData {
  petsList: any[];
  newPet: Pet;
  addPet: () => void;

  createNewDiagnose: () => void;
  editDiagnose: (id: string, text: string) => void;

  editMedicines: () => void;
  editVaccines: () => void;
  editAllergies: () => void;
}

export const PetsContext = createContext<PetsContextData>({
  petsList: [],
  newPet: PET_EMPTY_STATE,
  addPet: () => {},

  createNewDiagnose: () => {},
  editDiagnose: (id: string, text: string) => {},

  editMedicines: () => {},
  editVaccines: () => {},
  editAllergies: () => {},
});

export const PetsProvider: React.FC<{ children: any }> = ({ children }) => {
  const [petsList, setPetsList] = useState<any[]>(PET_LIST_DEFAULT_STATE);
  const [newPet, setNewPet] = useState<Pet>(PET_EMPTY_STATE);

  const addPet = () => {
    const newPet: Pet = {
      id: randomUUID(),
      name: "",
      creationDate: "17/08/2024",
      photoURL: "",
      isCreating: true,
      details: PET_EMPTY_STATE.details,
    };

    setNewPet(newPet);
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
              isCreating: true,
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
      isCreating: false,
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

  const editMedicines = () => {
    console.log("Edit Medicines");
  };
  const editVaccines = () => {
    console.log("Edit Vaccines");
  };
  const editAllergies = () => {
    console.log("Edit Allergies");
  };

  const contextValue = {
    petsList,
    newPet,
    addPet,

    createNewDiagnose,
    editDiagnose,

    editMedicines,
    editVaccines,
    editAllergies,
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
