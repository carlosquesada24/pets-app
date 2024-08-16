import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DataList from "../../../../../../components/DataList/DataList";

interface PetMedicalInformationProps {
  diagnosesList: any[];
  setDiagnosesList: (diagnose: any) => void;
  allergiesList: any[];
  setAllergiesList: (diagnose: any) => void;
  medicinesList: any[];
  setMedicinesList: (diagnose: any) => void;
  vaccinesList: any[];
  setVaccinesList: (diagnose: any) => void;
}

const PetMedicalInformation = (props: PetMedicalInformationProps) => {
  const {
    diagnosesList,
    setDiagnosesList,
    allergiesList,
    setAllergiesList,
    medicinesList,
    setMedicinesList,
    vaccinesList,
    setVaccinesList,
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
      <DataList title="Diagnoses" dataList={diagnosesList} />
      <DataList title="Allergies" dataList={allergiesList} />
      <DataList title="Medicines" dataList={medicinesList} />
      <DataList title="Vaccines" dataList={vaccinesList} />
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
