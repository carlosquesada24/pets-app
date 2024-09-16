import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import AddPetForm from "../../components/AddPetForm/AddPetForm";
import ScreenLayout from "../../../../(components)/ScreenLayout/ScreenLayout";

const AddPetView = () => {
  return (
    <ScreenLayout>
      <>
        <Text
          style={{
            ...styles.text,
            ...styles.title,
          }}
        >
          Agregar mascota
        </Text>

        <AddPetForm />
      </>
    </ScreenLayout>
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
