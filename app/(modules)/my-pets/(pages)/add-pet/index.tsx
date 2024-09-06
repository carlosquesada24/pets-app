import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { usePets } from "../../infrastructure/context/PetsContext";
import AddPetForm from "../../components/AddPetForm/AddPetForm";
import { router } from "expo-router";
import { randomUUID } from "expo-crypto";

const AddPetView = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [breed, setBreed] = useState("");

  const {
    newPet,
    addPet,
    updatePet,
    createNewDiagnose,
    editDiagnose,
    createNewMedicine,
    editMedicine,
    createNewAllergy,
    editAllergy,
    createNewVaccine,
    editVaccine,
  } = usePets();

  useEffect(() => {}, []);

  const addDiagnose = (diagnose: any) => {
    createNewDiagnose();
  };
  const handleEditDiagnose = (id: string, text: string) => {
    editDiagnose(id, text);
  };

  // Handle form submission

  return (
    <ScrollView style={{ width: "100%", maxWidth: "100%" }}>
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

      <AddPetForm />
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
