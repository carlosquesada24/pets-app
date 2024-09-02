import React, { useEffect } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import PetDetails from "./components/PetDetails";
import PetMedicalInformation from "./components/PetMedicalInformation";
import useStepperForm from "../../../../(hooks)/useStepperForm";
import ButtonsGroup from "./components/ButtonsGroup";
import { useAddPetForm } from "../../(hooks)/useAddPetFormValidation";
import { usePets } from "../../infrastructure/context/PetsContext";
import { router } from "expo-router";

interface AddPetFormProps {}

const ADD_PET_FORM_STEPS = {
  PET_BASIC_INFO: 0,
  PET_CHARACTERISTICS_INFO: 1,
  PET_MEDICAL_INFO: 2,
};

const AddPetForm = (props: AddPetFormProps) => {
  const { newPet, updatePet } = usePets();

  const {
    values: formValues,
    setValues: setFormValues,
    errors,
    handleInputChange,
    validateField,
  } = useAddPetForm({
    name: "",
    weight: "",
    height: "",
    age: "",
    breed: "",

    diagnoses: [],
    allergies: [],
    vaccines: [],
    medicines: [],
  });

  const handleAddDiagnose = (item: any) => {
    setFormValues({
      ...formValues,
      diagnoses: [...formValues.diagnoses, item],
    });
  };

  const handleEditDiagnose = (item: any) => {
    setFormValues({
      ...formValues,
      diagnoses: [...formValues.diagnoses, item],
    });
  };

  const handleDeleteDiagnose = (id: string) => {
    const updatedItems = formValues.diagnoses.filter(
      (item: any) => item.id !== id
    );

    setFormValues({
      ...formValues,
      diagnoses: updatedItems,
    });
  };

  const handleAddAllergy = (item: any) => {
    setFormValues({
      ...formValues,
      allergies: [...formValues.allergies, item],
    });
  };

  const handleDeleteAllergy = (id: string) => {
    const updatedItems = formValues.allergies.filter(
      (item: any) => item.id !== id
    );

    setFormValues({
      ...formValues,
      allergies: updatedItems,
    });
  };

  const handleAddVaccine = (item: any) => {
    setFormValues({
      ...formValues,
      vaccines: [...formValues.vaccines, item],
    });
  };

  const handleDeleteVaccine = (id: string) => {
    const updatedItems = formValues.vaccines.filter(
      (item: any) => item.id !== id
    );

    setFormValues({
      ...formValues,
      vaccines: updatedItems,
    });
  };

  const handleAddMedicine = (item: any) => {
    setFormValues({
      ...formValues,
      medicines: [...formValues.medicines, item],
    });
  };

  const handleDeleteMedicine = (id: string) => {
    const updatedItems = formValues.medicines.filter(
      (item: any) => item.id !== id
    );

    setFormValues({
      ...formValues,
      medicines: updatedItems,
    });
  };

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

  const handleNextStep = () => {
    if (currentFormStep === firstFormStep) {
      const nameErrors = validateField("name", formValues.name);
      const hasNameErrors = nameErrors.length !== 0;

      if (hasNameErrors) {
        return;
      }
    }

    if (currentFormStep === ADD_PET_FORM_STEPS.PET_CHARACTERISTICS_INFO) {
      const weightErrors = validateField("weight", formValues.weight);
      const heightErrors = validateField("height", formValues.height);
      const ageErrors = validateField("age", formValues.age);
      const breedErrors = validateField("breed", formValues.breed);

      const hasSectionErrors =
        weightErrors.length !== 0 ||
        heightErrors.length !== 0 ||
        ageErrors.length !== 0 ||
        breedErrors.length !== 0;

      if (hasSectionErrors) {
        return;
      }
    }

    nextStep();
  };

  const medicalHandlers = {
    diagnoses: {
      addDiagnose: handleAddDiagnose,
      editDiagnose: handleEditDiagnose,
      deleteDiagnose: handleDeleteDiagnose,
    },
    allergies: {
      addAllergy: handleAddAllergy,
      editAllergy: handleAddAllergy,
      deleteAllergy: handleDeleteAllergy,
    },
    medicines: {
      addMedicine: handleAddMedicine,
      editMedicine: handleAddMedicine,
      deleteMedicine: handleDeleteMedicine,
    },
    vaccines: {
      addVaccine: handleAddVaccine,
      editVaccine: handleAddVaccine,
      deleteVaccine: handleDeleteVaccine,
    },
  };

  const handleSubmit = () => {};

  return (
    <View style={{ height: Dimensions.get("window").height }}>
      {currentFormStep === ADD_PET_FORM_STEPS.PET_BASIC_INFO && (
        <>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Ejemplo: Max"
              placeholderTextColor="#a3a2a2"
              onChangeText={(text) => handleInputChange("name", text)}
            />

            {errors.name &&
              errors.name.map((error: string, index: number) => (
                <Text key={index} style={{ color: "red" }}>
                  {error}
                </Text>
              ))}
          </View>
        </>
      )}

      {currentFormStep === ADD_PET_FORM_STEPS.PET_CHARACTERISTICS_INFO && (
        <>
          <PetDetails
            formValues={formValues}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        </>
      )}

      {currentFormStep === ADD_PET_FORM_STEPS.PET_MEDICAL_INFO && (
        <>
          <PetMedicalInformation
            diagnosesList={formValues.diagnoses}
            allergiesList={formValues.allergies}
            medicinesList={formValues.medicines}
            vaccinesList={formValues.vaccines}
            medicalHandlers={medicalHandlers}
          />
        </>
      )}

      <ButtonsGroup
        currentFormStep={currentFormStep}
        firstFormStep={firstFormStep}
        lastFormStep={lastFormStep}
        prevStep={prevStep}
        nextStep={handleNextStep}
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
