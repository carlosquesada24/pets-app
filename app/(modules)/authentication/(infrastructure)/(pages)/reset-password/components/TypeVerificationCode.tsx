import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../../../../../../components/Button";

const TypeVerificationCode = (props: {
  handleInputChange: Function;
  errors: any;
  formValues: any;
}) => {
  return (
    <SafeAreaView>
      <View style={styles.textGroup}>
        <Text style={{ ...styles.text, fontSize: 18, fontWeight: "bold" }}>
          Digite el código de verificación
        </Text>
        <Text style={{ ...styles.text, fontSize: 12, marginTop: 4 }}>
          Puede demorar unos segundos
        </Text>
      </View>

      <SafeAreaView style={{ flexDirection: "column" }}>
        <TextInput
          style={{ ...styles.input, marginTop: 12, width: "100%" }}
          placeholder=""
          placeholderTextColor="#fff"
          keyboardType="phone-pad"
          onChangeText={(text) =>
            props.handleInputChange("verificationCode", text)
          }
        />

        {props.errors.verificationCode &&
          props.errors.verificationCode.map((error: string, index: number) => (
            <Text key={index} style={styles.errorText}>
              {error}
            </Text>
          ))}
      </SafeAreaView>

      <View>
        <Text style={{ ...styles.text, fontSize: 12, marginTop: 12 }}>
          ¿No ha recibido el código?
        </Text>
        <Pressable>
          <Text
            style={{
              fontSize: 12,
              marginTop: 12,
              color: "#D0FF41",
            }}
          >
            Reenviar
          </Text>
        </Pressable>
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

export default TypeVerificationCode;
