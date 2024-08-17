import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import DataList from "../../../../../components/DataList/DataList";
import CustomButton from "../../../../../components/Button";
import PetDetails from "./components/PetDetails";
import PetMedicalInformation from "./components/PetMedicalInformation";

interface AddPetFormProps {
  name: string;

  setName: (name: string) => void;
  weight: string;
  setWeight: (weight: string) => void;
  height: string;
  setHeight: (height: string) => void;
  age: string;
  setAge: (age: string) => void;
  breed: string;
  setBreed: (breed: string) => void;

  diagnosesList: any[];
  addDiagnose: (item: any) => void;
  allergiesList: any[];
  addAllergy: (item: any) => void;
  medicinesList: any[];
  addMedicine: (item: any) => void;
  vaccinesList: any[];
  addVaccine: (item: any) => void;

  handleSubmit: () => void;
}

const AddPetForm = (props: AddPetFormProps) => {
  const {
    name,
    setName,
    weight,
    setWeight,
    height,
    setHeight,
    age,
    setAge,
    breed,
    setBreed,
    diagnosesList,
    addDiagnose,
    allergiesList,
    addAllergy,
    medicinesList,
    addMedicine,
    vaccinesList,
    addVaccine,
    handleSubmit,
  } = props;

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Ejemplo: Max"
        placeholderTextColor="#a3a2a2"
        onChange={(e) => setName(e.nativeEvent.text)}
      />

      <PetDetails
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
      />

      <PetMedicalInformation
        diagnosesList={diagnosesList}
        addDiagnose={addDiagnose}
        addAllergy={addAllergy}
        addMedicine={addMedicine}
        addVaccine={addVaccine}
        allergiesList={allergiesList}
        medicinesList={medicinesList}
        vaccinesList={vaccinesList}
      />

      <CustomButton text="Guardar" type="primary" onPress={handleSubmit} />
    </View>
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

export default AddPetForm;