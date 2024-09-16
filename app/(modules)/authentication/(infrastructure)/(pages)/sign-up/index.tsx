import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../../../(hooks)/useForm";
import CustomButton from "../../../../../../components/Button";

import { signUpValidations } from "../../../(domain)/validations/sign-up";
import { useAuth } from "../../(contexts)/AuthContext";
import { useRouter } from "expo-router";
import ScreenLayout from "../../../../../(components)/ScreenLayout/ScreenLayout";

const SIGN_UP_FORM_DEFAULT_STATE = {
  email: "",
  password: "",
};

const SignUpPage = () => {
  const {
    values: formValues,
    errors,
    handleInputChange,
  } = useForm(SIGN_UP_FORM_DEFAULT_STATE, signUpValidations);

  const { signUp } = useAuth();

  const router = useRouter();

  const handleSignUp = () => {
    signUp(formValues.email, formValues.password);

    router.push("/my-pets");
  };

  return (
    <ScreenLayout>
      <>
        <Text style={{ ...styles.text, ...styles.title }}>Crear cuenta</Text>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>
            Correo electrónico
          </Text>

          <TextInput
            style={styles.input}
            placeholder="admin@example.com"
            placeholderTextColor="#a3a2a2"
            onChangeText={(text) => handleInputChange("email", text)}
          />

          {errors.email &&
            errors.email.map((error: string, index: number) => (
              <Text key={index} style={styles.errorText}>
                {error}
              </Text>
            ))}
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Contraseña</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="fM{A!J22|ZHl"
            placeholderTextColor="#a3a2a2"
            onChangeText={(text) => handleInputChange("password", text)}
          />

          {errors.password &&
            errors.password.map((error: string, index: number) => (
              <Text key={index} style={styles.errorText}>
                {error}
              </Text>
            ))}
        </View>

        <CustomButton
          customStyles={styles.signUpButton}
          text="Crear cuenta"
          type="primary"
          onPress={() => handleSignUp()}
        />
      </>
    </ScreenLayout>
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
  signUpButton: {
    fontWeight: "bold",
    marginTop: 24,
  },
});

export default SignUpPage;
