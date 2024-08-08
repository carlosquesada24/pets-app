import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";
import CustomButton from "../../../components/Button";
import { SIMPLE_PETS_LIST } from "../../../domain/pets/data";

const Index = () => {
  const handleAddPet = () => {};

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text}>Mis mascotas</Text>

        <CustomButton text="Agregar" type="primary" onPress={handleAddPet} />
      </View>

      <View style={styles.petsListContainer}>
        {SIMPLE_PETS_LIST.map((pet, index) => (
          <View style={styles.petItem} key={index}>
            <Image style={styles.petPhoto} src={pet.photoURL} />
            <Text style={{ ...styles.text, ...styles.petName }}>
              {pet.name}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
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
