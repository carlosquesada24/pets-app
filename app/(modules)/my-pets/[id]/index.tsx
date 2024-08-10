import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { SIMPLE_PETS_LIST } from "../../../../domain/pets/data";

const PetDetailsView = () => {
  const { id } = useLocalSearchParams();

  const foundPet = SIMPLE_PETS_LIST[Number(id)];

  return (
    <View>
      <Text style={styles.text}>{foundPet.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});

export default PetDetailsView;
