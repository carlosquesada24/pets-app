import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { BORDER_RADIUS, PADDING } from "./constants/styles";
import { Link } from "expo-router";

const Index = () => {
  return (
    <View>
      <View>
        <Link href="/my-pets" style={styles.text}>
          Mis mascotas
        </Link>
        <Link href="/profile" style={styles.text}>
          Perfil
        </Link>
      </View>
      <Text style={styles.text}></Text>
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
  addButton: {
    padding: PADDING,
    borderRadius: BORDER_RADIUS,
    color: "#000",
    backgroundColor: "#fff",
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
