import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TypePhoneNumber from "./components/TypePhoneNumber";
import CustomButton from "../../../../../../components/Button";
import TypeNewPassword from "./components/TypeNewPassword";
import TypeVerificationCode from "./components/TypeVerificationCode";
import { useForm } from "../../../../../(hooks)/useForm";
import useStepperForm from "../../../../../(hooks)/useStepperForm";
import { useRouter } from "expo-router";
import ROUTES from "../../../../../constants/routes";

const RESET_PASSWORD_FORM_DEFAULT_STATE = {
  phoneNumber: "",
  verificationCode: "",
  newPassword: "",
  confirmPassword: "",
};

export const resetPasswordValidations = {
  phoneNumber: (value: string) => {
    const errors: string[] = [];
    const phoneRegex = /^[2-8]\d{7}$/; // Números de Costa Rica tienen 8 dígitos y empiezan con 2-8
    if (!value) {
      errors.push("El número de teléfono es obligatorio.");
    } else if (!phoneRegex.test(value)) {
      errors.push(
        "El número de teléfono no es válido. Debe contener 8 dígitos y comenzar con 2-8."
      );
    }
    return errors;
  },
  verificationCode: (value: string) => {
    const errors: string[] = [];

    const verificationRegex = /^\d{6}$/; // Código de verificación de 6 dígitos
    if (!value) {
      errors.push("El código de verificación es obligatorio.");
    } else if (!verificationRegex.test(value)) {
      errors.push(
        "El código de verificación debe contener exactamente 6 dígitos."
      );
    }

    return errors;
  },
  password: (value: string) => {
    const errors: string[] = [];
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!value) {
      errors.push("La contraseña es obligatoria.");
    } else if (value.length < 8) {
      errors.push("La contraseña debe tener al menos 8 caracteres.");
    } else if (!specialCharRegex.test(value)) {
      errors.push("La contraseña debe contener al menos un carácter especial.");
    }
    return errors;
  },
};

const RESET_PASSWORD_FORM_STEPS = {
  TYPE_PHONE_NUMBER: 0,
  TYPE_VERIFICATION_CODE: 1,
  TYPE_NEW_PASSWORD: 2,
};

const BUTTON_TEXT_BY_RESET_PASSWORD_FORM_STEP = {
  [RESET_PASSWORD_FORM_STEPS.TYPE_PHONE_NUMBER]:
    "Enviar código de verificación",
  [RESET_PASSWORD_FORM_STEPS.TYPE_VERIFICATION_CODE]: "Verificar",
  [RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD]: "Aceptar",
};

const ResetPasswordPage = () => {
  const {
    values: formValues,
    errors,
    handleInputChange,
  } = useForm(RESET_PASSWORD_FORM_DEFAULT_STATE, resetPasswordValidations);

  const {
    step: currentFormStep,
    nextStep,
    prevStep,
  } = useStepperForm(
    RESET_PASSWORD_FORM_STEPS.TYPE_PHONE_NUMBER,
    RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD
  );

  const router = useRouter();

  // BUTTON
  const customButtomText =
    BUTTON_TEXT_BY_RESET_PASSWORD_FORM_STEP[currentFormStep];

  const handleSendVerificationCode = () => {
    alert("Sending verification code...");

    nextStep();
  };

  const handleVerifyCode = () => {
    alert("Verifying code...");

    nextStep();
  };

  const handleResetPassword = () => {
    alert("Resetting password...");

    router.push(ROUTES.AUTHENTICATION.PROFILE);
  };

  const handleCustomButton = () => {
    switch (currentFormStep) {
      case RESET_PASSWORD_FORM_STEPS.TYPE_PHONE_NUMBER:
        handleSendVerificationCode();
        break;
      case RESET_PASSWORD_FORM_STEPS.TYPE_VERIFICATION_CODE:
        handleVerifyCode();
        break;
      case RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD:
        handleResetPassword();
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ ...styles.text, ...styles.title }}>
        Reestablecer contraseña
      </Text>

      {currentFormStep === RESET_PASSWORD_FORM_STEPS.TYPE_PHONE_NUMBER && (
        <TypePhoneNumber
          handleInputChange={handleInputChange}
          errors={errors}
          formValues={formValues}
        />
      )}

      {currentFormStep === RESET_PASSWORD_FORM_STEPS.TYPE_VERIFICATION_CODE && (
        <TypeVerificationCode />
      )}

      {currentFormStep === RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD && (
        <TypeNewPassword />
      )}

      <CustomButton
        text={customButtomText}
        customStyles={styles.signInButton}
        type="primary"
        onPress={handleCustomButton}
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

export default ResetPasswordPage;
