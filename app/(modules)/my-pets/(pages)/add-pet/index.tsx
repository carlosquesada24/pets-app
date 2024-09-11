import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import AddPetForm from "../../components/AddPetForm/AddPetForm";

const AddPetView = () => {
  return (
    <ScrollView
      style={{
        width: "100%",
      }}
    >
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
