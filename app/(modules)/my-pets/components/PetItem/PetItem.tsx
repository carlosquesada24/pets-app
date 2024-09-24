import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

interface PetItemProps {
  id: string;
  photoURL: string;
  name: string;
}

const PetItem = ({ id, photoURL, name }: PetItemProps) => {
  return (
    <Link href={`/my-pets/${id}`} asChild>
      <Pressable style={styles.petItem} key={id}>
        <Image style={styles.petPhoto} src={photoURL} />
        <Text style={{ ...styles.text, ...styles.petName }}>{name}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  petItem: {
    marginTop: 32,
  },
  petName: {
    marginTop: 8,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  petPhoto: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

export default PetItem;
