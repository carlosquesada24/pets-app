import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../../../../components/Button";

const TypeNewPassword = () => {
  return (
    <SafeAreaView>
      <View style={styles.formGroup}>
        <Text style={{ ...styles.text, ...styles.label }}>
          Nueva contraseña
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="fM{A!J22|ZHl"
          placeholderTextColor="#a3a2a2"
          // onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={{ ...styles.text, ...styles.label }}>
          Confirmar contraseña
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="fM{A!J22|ZHl"
          placeholderTextColor="#a3a2a2"
          // onChangeText={(text) => handleInputChange("password", text)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  container: {
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "transparent",
    color: "#fff",
    marginTop: 4,
    borderWidth: 2,
    borderColor: "#242424",
  },
  errorText: {
    color: "#f00",
  },
  signInButton: {
    fontWeight: "bold",
    marginTop: 24,
  },
  textGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TypeNewPassword;
