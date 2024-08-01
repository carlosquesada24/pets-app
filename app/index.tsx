import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Index = () => {
  return (
    <View>
      <Text style={styles.text}>Mis mascotas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});

export default Index;
