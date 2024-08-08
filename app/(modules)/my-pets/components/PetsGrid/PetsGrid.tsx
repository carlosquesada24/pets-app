import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PetItem from "../PetItem/PetItem";

interface PetsGridProps {
  petsList: any[];
}

const PetsGrid = ({ petsList }: PetsGridProps) => {
  return (
    <View style={styles.petsListContainer}>
      {petsList.map((pet, index) => (
        <PetItem
          id={pet.id}
          photoURL={pet.photoURL}
          name={pet.name}
          key={index}
        />
      ))}
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

export default PetsGrid;
