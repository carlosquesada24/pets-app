import React from "react";
import { StyleProp, StyleSheet, TextStyle } from "react-native";
import { View } from "react-native";
import { BORDER_RADIUS, PADDING } from "./constants/styles";
import { Link } from "expo-router";
import ROUTES from "./constants/routes";
import ScreenLayout from "./(components)/ScreenLayout/ScreenLayout";
import { globalStyles } from "./(styles)/global";

const Index = () => {
  const linkStyles: StyleProp<TextStyle> = {
    ...styles.link,
    ...globalStyles.link,
  };

  return (
    <ScreenLayout>
      <View>
        <Link href={ROUTES.PETS.MY_PETS} style={linkStyles}>
          Mis mascotas
        </Link>

        <Link href={ROUTES.PETS.ADD_PET} style={linkStyles}>
          Agregar mascota
        </Link>

        <Link href={ROUTES.AUTHENTICATION.PROFILE} style={styles.link}>
          Perfil
        </Link>

        <Link href={ROUTES.AUTHENTICATION.SIGN_UP} style={styles.link}>
          Crear cuenta
        </Link>

        <Link href={ROUTES.AUTHENTICATION.SIGN_IN} style={styles.link}>
          Iniciar sesión
        </Link>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "#fff",
    marginTop: 32,
    marginBottom: 32,
  },
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
