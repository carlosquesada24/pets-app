import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import CustomButton from "../../../components/Button";
import { SIMPLE_PETS_LIST } from "../../../domain/pets/data";
import PetsGrid from "./components/PetsGrid/PetsGrid";

const Index = () => {
  const handleAddPet = () => {};

  return (
    <View>
      <View style={styles.header}>
        <Text style={{ ...styles.text, ...styles.title }}>Mis mascotas</Text>

        <CustomButton text="Agregar" type="primary" onPress={handleAddPet} />
      </View>

      <PetsGrid petsList={SIMPLE_PETS_LIST} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  petsListContainer: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  petItem: {
    marginTop: 16,
  },
  petName: {
    marginTop: 8,
    textAlign: "center",
  },
  petPhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

export default Index;
