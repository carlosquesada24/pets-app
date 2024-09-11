import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useForm } from "../../../../../(hooks)/useForm";
import CustomButton from "../../../../../../components/Button";

const SIGN_UP_FORM_DEFAULT_STATE = {
  email: "",
  password: "",
};

const SignUpPage = () => {
  const { values: formValues } = useForm(SIGN_UP_FORM_DEFAULT_STATE);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Crear cuenta</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="admin@example.com"
          placeholderTextColor="#a3a2a2"
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="ASKDNNDLKASND2313123"
          placeholderTextColor="#a3a2a2"
        />
      </View>

      <CustomButton
        customStyles={styles.signUpButton}
        text="Crear cuenta"
        type="primary"
        onPress={() => {
          alert("Creando cuenta");
        }}
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
