import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DataList from "../../../../../../components/DataList/DataList";

interface PetMedicalInformationProps {
  diagnosesList?: any[];
  allergiesList?: any[];
  medicinesList?: any[];
  vaccinesList?: any[];

  medicalHandlers: {
    diagnoses: {
      addDiagnose: (item: any) => void;
      editDiagnose: (id: string, text: string) => void;
      deleteDiagnose: (id: any) => void;
    };
    allergies: {
      addAllergy: (item: any) => void;
      editAllergy: (id: string, text: string) => void;
      deleteAllergy: (id: any) => void;
    };
    medicines: {
      addMedicine: (item: any) => void;
      editMedicine: (id: string, text: string) => void;
      deleteMedicine: (id: any) => void;
    };
    vaccines: {
      addVaccine: (item: any) => void;
      editVaccine: (id: string, text: string) => void;
      deleteVaccine: (id: any) => void;
    };
  };
}

const PetMedicalInformation = (props: PetMedicalInformationProps) => {
  const {
    allergiesList,
    diagnosesList,
    medicinesList,
    vaccinesList,
    medicalHandlers,
  } = props;

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.text, ...styles.subtitle }}>Médico</Text>
      <DataList
        title="Diagnoses"
        dataList={diagnosesList ?? []}
        handleAddItem={medicalHandlers.diagnoses.addDiagnose}
        handleEditItem={medicalHandlers.diagnoses.editDiagnose}
        handleDeleteItem={medicalHandlers.diagnoses.deleteDiagnose}
      />
      <DataList
        title="Allergies"
        dataList={allergiesList ?? []}
        handleAddItem={medicalHandlers.allergies.addAllergy}
      />

      <DataList
        title="Medicines"
        dataList={medicinesList ?? []}
        handleAddItem={medicalHandlers.medicines.addMedicine}
      />
      <DataList
        title="Vaccines"
        dataList={vaccinesList ?? []}
        handleAddItem={medicalHandlers.vaccines.addVaccine}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginTop: 12,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
  },
});

export default PetMedicalInformation;
