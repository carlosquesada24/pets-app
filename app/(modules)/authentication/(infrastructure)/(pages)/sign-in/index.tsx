import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../../../(hooks)/useForm";
import CustomButton from "../../../../../../components/Button";

import { signUpValidations } from "../../../(domain)/validations/sign-up";
import { useAuth } from "../../(contexts)/AuthContext";
import { Link } from "expo-router";
import ScreenLayout from "../../../../../(components)/ScreenLayout/ScreenLayout";
import routes from "../../../../../constants/routes";
import { COLORS } from "../../../../../constants/styles";

const SIGN_IN_FORM_DEFAULT_STATE = {
  email: "",
  password: "",
};

const SignInPage = () => {
  const {
    values: formValues,
    errors,
    handleInputChange,
  } = useForm(SIGN_IN_FORM_DEFAULT_STATE, signUpValidations);

  const { logIn } = useAuth();

  const handleSignIn = async () => {
    await logIn(formValues.email, formValues.password);
  };

  return (
    <ScreenLayout>
      <>
        <Text style={{ ...styles.text, ...styles.title }}>Iniciar sesión</Text>

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
          customStyles={styles.signInButton}
          text="Iniciar sesión"
          type="primary"
          onPress={() => handleSignIn()}
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
  signInButton: {
    fontWeight: "bold",
    marginTop: 24,
  },
});

export default SignInPage;
