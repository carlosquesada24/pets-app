import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DataList from "../../../../../../components/DataList/DataList";

interface PetMedicalInformationProps {
  diagnosesList: any[];
  addDiagnose: (item: any) => void;
  editDiagnose: (id: string, text: string) => void;
  allergiesList: any[];
  addAllergy: (item: any) => void;
  medicinesList: any[];
  addMedicine: (item: any) => void;
  vaccinesList: any[];
  addVaccine: (item: any) => void;
}

const PetMedicalInformation = (props: PetMedicalInformationProps) => {
  const {
    diagnosesList,
    addDiagnose,
    editDiagnose,

    allergiesList,
    addAllergy,
    medicinesList,
    addMedicine,
    vaccinesList,
    addVaccine,
  } = props;

  return (
    <View style={{ marginBottom: 12, marginTop: 12 }}>
      <Text
        style={{
          ...styles.text,
          marginTop: 12,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        Médico
      </Text>
      <DataList
        title="Diagnoses"
        dataList={diagnosesList}
        handleAddItem={addDiagnose}
        handleEditItem={editDiagnose}
      />
      <DataList
        title="Allergies"
        dataList={allergiesList}
        handleAddItem={addAllergy}
      />
      <DataList
        title="Medicines"
        dataList={medicinesList}
        handleAddItem={addMedicine}
      />
      <DataList
        title="Vaccines"
        dataList={vaccinesList}
        handleAddItem={addVaccine}
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
});

export default PetMedicalInformation;
