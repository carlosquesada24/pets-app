import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../../../(hooks)/useForm";
import CustomButton from "../../../../../../components/Button";

import { signUpValidations } from "../../../(domain)/validations/sign-up";
import { useAuth } from "../../(contexts)/AuthContext";
import { useRouter } from "expo-router";

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
    <View style={styles.container}>
      <Text style={styles.text}>Crear cuenta</Text>

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
          placeholder="ASKDNNDLKASND2313123"
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
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
  signUpButton: {
    fontWeight: "bold",
  },
});

export default SignUpPage;
