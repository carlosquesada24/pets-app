import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import AddPetForm from "../../components/AddPetForm/AddPetForm";

const AddPetView = () => {
  return (
    <ScrollView style={styles.addPetPage}>
      <Text
        style={{
          ...styles.text,
          ...styles.title,
        }}
      >
        Agregar mascota
      </Text>

      <AddPetForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addPetPage: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  text: {
    color: "#fff",
  },
});

export default AddPetView;
