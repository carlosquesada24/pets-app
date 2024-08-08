import React from "react";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";
import { View } from "react-native";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
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
  },
  link: {
    color: "#48a4fa",
    fontSize: 20,
  },
});

export default Layout;
