import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import CustomButton from "../../../components/Button";
import PetsGrid from "./components/PetsGrid/PetsGrid";
import { usePets } from "./infrastructure/context/PetsContext";

const Index = () => {
  const handleAddPet = () => {};

  const { petsList } = usePets();

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={{ ...styles.text, ...styles.title }}>Mis mascotas</Text>

        <CustomButton text="Agregar" type="primary" onPress={handleAddPet} />
      </View>

      <PetsGrid petsList={petsList} />
    </ScrollView>
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
});

export default Index;
