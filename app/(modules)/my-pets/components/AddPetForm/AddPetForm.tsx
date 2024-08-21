import React from "react";
import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import PetDetails from "./components/PetDetails";
import PetMedicalInformation from "./components/PetMedicalInformation";
import useStepperForm from "../../../../(hooks)/useStepperForm";
import ButtonsGroup from "./components/ButtonsGroup";

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
  editDiagnose: (id: string, text: string) => void;

  allergiesList: any[];
  addAllergy: (item: any) => void;
  editAllergy: (id: string, text: string) => void;

  medicinesList: any[];
  addMedicine: (item: any) => void;
  editMedicine: (id: string, text: string) => void;

  vaccinesList: any[];
  addVaccine: (item: any) => void;
  editVaccine: (id: string, text: string) => void;

  handleSubmit: () => void;
}

const ADD_PET_FORM_STEPS = {
  PET_BASIC_INFO: 0,
  PET_CHARACTERISTICS_INFO: 1,
  PET_MEDICAL_INFO: 2,
};

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
    editDiagnose,
    allergiesList,
    addAllergy,
    medicinesList,
    addMedicine,
    vaccinesList,
    addVaccine,
    handleSubmit,
    editAllergy,
    editMedicine,
    editVaccine,
  } = props;

  const {
    step: currentFormStep,
    nextStep,
    prevStep,
  } = useStepperForm(
    ADD_PET_FORM_STEPS.PET_BASIC_INFO,
    ADD_PET_FORM_STEPS.PET_MEDICAL_INFO
  );

  const firstFormStep = ADD_PET_FORM_STEPS.PET_BASIC_INFO;
  const lastFormStep = ADD_PET_FORM_STEPS.PET_MEDICAL_INFO;

  return (
    <View style={{ height: Dimensions.get("window").height }}>
      {currentFormStep === ADD_PET_FORM_STEPS.PET_BASIC_INFO && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: Max"
            placeholderTextColor="#a3a2a2"
            onChange={(e) => setName(e.nativeEvent.text)}
          />
        </>
      )}

      {currentFormStep === ADD_PET_FORM_STEPS.PET_CHARACTERISTICS_INFO && (
        <>
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
        </>
      )}

      {currentFormStep === ADD_PET_FORM_STEPS.PET_MEDICAL_INFO && (
        <>
          <PetMedicalInformation
            diagnosesList={diagnosesList}
            addDiagnose={addDiagnose}
            editDiagnose={editDiagnose}
            allergiesList={allergiesList}
            addAllergy={addAllergy}
            editAllergy={editAllergy}
            medicinesList={medicinesList}
            addMedicine={addMedicine}
            editMedicine={editMedicine}
            vaccinesList={vaccinesList}
            addVaccine={addVaccine}
            editVaccine={editVaccine}
          />
        </>
      )}

      <ButtonsGroup
        currentFormStep={currentFormStep}
        firstFormStep={firstFormStep}
        lastFormStep={lastFormStep}
        prevStep={prevStep}
        nextStep={nextStep}
        handleSubmit={handleSubmit}
      />
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
  buttonGroup: {
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});

export default AddPetForm;
