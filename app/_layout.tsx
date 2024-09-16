import React from "react";
import { Link, Slot, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";
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
            <Stack
              screenOptions={{
                headerStyle: { backgroundColor: "yellow" },
                headerTitle: "",
                headerLeft: () => (
                  <Link href={"/"} style={{ color: "#000" }}>
                    Logo
                  </Link>
                ),
                headerRight: () => <Text style={{ color: "#000" }}>XD</Text>,
              }}
            />
          </PetsProvider>
        </AuthProvider>
      </View>
    </SQLiteProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    maxWidth: "100%",
  },
  link: {
    color: "#48a4fa",
    fontSize: 20,
  },
});

export default Layout;
