import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { usePets } from "../../infrastructure/context/PetsContext";
import AddPetForm from "../../components/AddPetForm/AddPetForm";

const AddPetView = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [breed, setBreed] = useState("");

  const {
    newPet,
    addPet,
    createNewDiagnose,
    editDiagnose,
    createNewMedicine,
    editMedicine,
    createNewAllergy,
    editAllergy,
    createNewVaccine,
    editVaccine,
  } = usePets();

  useEffect(() => {
    addPet();
  }, []);

  const addDiagnose = (diagnose: any) => {
    createNewDiagnose();
  };
  const handleEditDiagnose = (id: string, text: string) => {
    editDiagnose(id, text);
  };

  // Handle form submission
  const handleSubmit = () => {};

  return (
    <ScrollView style={{ width: "100%" }}>
      <Text
        style={{
          ...styles.text,
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Agregar mascota
      </Text>

      <AddPetForm
        name={name}
        setName={setName}
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
        diagnosesList={newPet.details.medical.diagnoses}
        addDiagnose={addDiagnose}
        editDiagnose={handleEditDiagnose}
        allergiesList={newPet.details.medical.allergies}
        addAllergy={createNewAllergy}
        editAllergy={editAllergy}
        medicinesList={newPet.details.medical.medicines}
        addMedicine={createNewMedicine}
        editMedicine={editMedicine}
        vaccinesList={newPet.details.medical.vaccines}
        addVaccine={createNewVaccine}
        editVaccine={editVaccine}
        handleSubmit={handleSubmit}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  formGroup: {
    marginTop: 8,
  },
  label: {
    marginTop: 2,
  },
  input: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "transparent",
    color: "#fff",
    marginTop: 4,
    borderWidth: 2,
    borderColor: "#242424",
  },
});

export default AddPetView;
