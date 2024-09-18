import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TypeEmail = (props: {
  handleInputChange: Function;
  errors: any;
  formValues: any;
}) => {
  return (
    <SafeAreaView>
      <View style={styles.textGroup}>
        <Text style={{ ...styles.text, fontSize: 18, fontWeight: "bold" }}>
          Digite su correo electrónico
        </Text>
      </View>

      <SafeAreaView style={{}}>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={{ ...styles.input, marginTop: 12, width: "100%" }}
            placeholder="Ingresa tu correo electrónico"
            placeholderTextColor="#fff"
            onChangeText={(text) => props.handleInputChange("email", text)}
          />
        </View>
        {props.errors.email &&
          props.errors.email.map((error: string, index: number) => (
            <Text key={index} style={styles.errorText}>
              {error}
            </Text>
          ))}
      </SafeAreaView>
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
    justifyContent: "center",
  },
});

export default TypeEmail;
