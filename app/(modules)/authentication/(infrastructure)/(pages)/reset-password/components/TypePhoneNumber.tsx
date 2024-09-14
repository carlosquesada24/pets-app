import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../../../../components/Button";

const TypePhoneNumber = () => {
  return (
    <SafeAreaView>
      <View style={styles.textGroup}>
        <Text style={{ ...styles.text, fontSize: 18, fontWeight: "bold" }}>
          Digite su número de teléfono
        </Text>
        <Text style={{ ...styles.text, fontSize: 12, marginTop: 4 }}>
          Le enviaremos un código de verificación
        </Text>
      </View>

      <SafeAreaView style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ ...styles.text, ...styles.label, marginRight: 8 }}>
          🇨🇷
        </Text>
        <TextInput
          style={{ ...styles.input, marginTop: 12, width: "100%" }}
          placeholder="Ingresa tu número de teléfono"
          placeholderTextColor="#fff"
          keyboardType="phone-pad"
        />
      </SafeAreaView>

      <CustomButton
        text="Enviar código de verificación"
        customStyles={styles.signInButton}
        type="primary"
        onPress={() => {}}
      />
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

export default TypePhoneNumber;
