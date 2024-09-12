import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../../../(hooks)/useForm";
import CustomButton from "../../../../../../components/Button";

import { signUpValidations } from "../../../(domain)/validations/sign-up";
import { useAuth } from "../../(contexts)/AuthContext";
import { useRouter } from "expo-router";

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

  const router = useRouter();

  const handleSignIn = () => {
    logIn(formValues.email, formValues.password);

    router.push("/my-pets");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Iniciar sesión</Text>

      <View>
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

      <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  text: {
    color: "#fff",
  },
  errorText: {
    color: "#f00",
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
  signInButton: {
    fontWeight: "bold",
  },
});

export default SignInPage;
