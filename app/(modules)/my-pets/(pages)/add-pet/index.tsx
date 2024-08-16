import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DataList from "../../../../../components/DataList/DataList";
import { usePets } from "../../infrastructure/context/PetsContext";
import CustomButton from "../../../../../components/Button";
import AddPetForm from "../../components/AddPetForm/AddPetForm";

const AddPetView = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [breed, setBreed] = useState("");

  const [diagnosesList, setDiagnosesList] = useState([]);
  const [allergiesList, setAllergiesList] = useState([]);
  const [medicinesList, setMedicinesList] = useState([]);
  const [vaccinesList, setVaccinesList] = useState([]);

  const { addPet } = usePets();

  // Handle form submission
  const handleSubmit = () => {
    const petInfo = {
      id: "random",
      name: name,
      photoURL: "",
      details: {
        information: {
          height,
          weight,
          age,
          breed,
        },
        medical: {
          diagnoses: diagnosesList,
          allergies: allergiesList,
          medicines: medicinesList,
          vaccines: vaccinesList,
        },
      },
    };

    addPet(petInfo);
  };

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
        diagnosesList={diagnosesList}
        setDiagnosesList={setDiagnosesList}
        allergiesList={allergiesList}
        setAllergiesList={setAllergiesList}
        medicinesList={medicinesList}
        setMedicinesList={setMedicinesList}
        vaccinesList={vaccinesList}
        setVaccinesList={setVaccinesList}
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
