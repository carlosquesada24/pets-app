import React from "react";
import { Link, Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Slot />

      <Link href="/" style={styles.link}>
        Ir a Mis mascotas
      </Link>

      <Link href="/profile" style={styles.link}>
        Ir a Perfil
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "#48a4fa",
    fontSize: 20,
  },
});

export default Layout;
