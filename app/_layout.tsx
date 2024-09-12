import React from "react";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { PetsProvider } from "./(modules)/my-pets/infrastructure/context/PetsContext";
import { SQLiteProvider } from "expo-sqlite";
import { initializeDatabase } from "./(config)/(db)";
import { AuthProvider } from "./(modules)/authentication/(infrastructure)/(contexts)/AuthContext";

const Layout = () => {
  return (
    <SQLiteProvider databaseName="pets.db" onInit={initializeDatabase}>
      <View style={styles.container}>
        <AuthProvider>
          <PetsProvider>
            <Slot />
          </PetsProvider>
        </AuthProvider>
      </View>
    </SQLiteProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingLeft: 8,
    paddingRight: 8,
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    // width: "100%",
    maxWidth: "100%",
  },
  link: {
    color: "#48a4fa",
    fontSize: 20,
  },
});

export default Layout;
