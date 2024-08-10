import React, { createContext, useContext, useState } from "react";
import { PET_LIST_DEFAULT_STATE } from "../../domain/data";

interface PetsContextData {
  petsList: any[];
}

export const PetsContext = createContext<PetsContextData>({
  petsList: [],
});

export const PetsProvider: React.FC<{ children: any }> = ({ children }) => {
  const [petsList, setPetsList] = useState<any[]>(PET_LIST_DEFAULT_STATE);

  const contextValue = {
    petsList,
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
