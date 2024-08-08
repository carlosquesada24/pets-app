import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface PetItemProps {
  id: string;
  photoURL: string;
  name: string;
}

const PetItem = ({ id, photoURL, name }: PetItemProps) => {
  return (
    <View style={styles.petItem} key={id}>
      <Image style={styles.petPhoto} src={photoURL} />
      <Text style={{ ...styles.text, ...styles.petName }}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
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

export default PetItem;
