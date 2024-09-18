import React from "react";
import { StyleSheet, Text } from "react-native";

import { useRouter } from "expo-router";
import { useForm } from "../../../../../../../(hooks)/useForm";
import useStepperForm from "../../../../../../../(hooks)/useStepperForm";
import ROUTES from "../../../../../../../constants/routes";
import ScreenLayout from "../../../../../../../(components)/ScreenLayout/ScreenLayout";
import TypeNewPassword from "../TypeNewPassword";
import CustomButton from "../../../../../../../../components/Button";
import TypeEmail from "../TypeEmail";
import { useAuth } from "../../../../(contexts)/AuthContext";

const OFFLINE_RESET_PASSWORD_FORM_DEFAULT_STATE = {
  email: "",
  newPassword: "",
  confirmPassword: "",
};

export const resetPasswordValidations = {
  email: (value: string) => {
    const errors: string[] = [];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      errors.push("El correo electrónico es obligatorio.");
    } else if (!emailRegex.test(value)) {
      errors.push("El correo electrónico no es válido.");
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
  newPassword: (value: string) => {
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
  confirmPassword: (value: string) => {
    const errors: string[] = [];

    return errors;
  },
};

const RESET_PASSWORD_FORM_STEPS = {
  TYPE_EMAIL: 0,
  TYPE_NEW_PASSWORD: 1,
};

const BUTTON_TEXT_BY_RESET_PASSWORD_FORM_STEP = {
  [RESET_PASSWORD_FORM_STEPS.TYPE_EMAIL]: "Enviar código de verificación",
  [RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD]: "Aceptar",
};

const OfflineResetPasswordForm = () => {
  const { resetPassword } = useAuth();

  const {
    values: formValues,
    errors,
    validateField,
    handleInputChange,
  } = useForm(
    OFFLINE_RESET_PASSWORD_FORM_DEFAULT_STATE,
    resetPasswordValidations
  );

  const {
    step: currentFormStep,
    nextStep,
    prevStep,
  } = useStepperForm(
    RESET_PASSWORD_FORM_STEPS.TYPE_EMAIL,
    RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD
  );

  const router = useRouter();

  // BUTTON
  const customButtomText =
    BUTTON_TEXT_BY_RESET_PASSWORD_FORM_STEP[currentFormStep];

  const handleVerifyEmail = () => {
    const emailErrorsList = validateField("email", formValues.email);

    const areTherePhoneNumberErrors = emailErrorsList.length > 0;

    if (!areTherePhoneNumberErrors) {
      nextStep();
    }
  };

  const handleResetPassword = async () => {
    const newPasswordErrorsList = validateField(
      "newPassword",
      formValues.newPassword
    );
    const confirmPasswordErrorsList = validateField(
      "confirmPassword",
      formValues.confirmPassword
    );

    const areThereErrors =
      newPasswordErrorsList.length > 0 || confirmPasswordErrorsList.length > 0;

    if (!areThereErrors) {
      alert("Resetting password...");
      await resetPassword(formValues.email, formValues.newPassword);
      router.push(ROUTES.AUTHENTICATION.PROFILE);
    }
  };

  const handleCustomButton = () => {
    switch (currentFormStep) {
      case RESET_PASSWORD_FORM_STEPS.TYPE_EMAIL:
        handleVerifyEmail();
        break;
      case RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD:
        handleResetPassword();
        break;
      default:
        break;
    }
  };

  return (
    <ScreenLayout>
      <>
        <Text style={{ ...styles.text, ...styles.title }}>
          Reestablecer contraseña
        </Text>

        {currentFormStep === RESET_PASSWORD_FORM_STEPS.TYPE_EMAIL && (
          //   <TypePhoneNumber
          //     handleInputChange={handleInputChange}
          //     errors={errors}
          //     formValues={formValues}
          //   />

          <TypeEmail
            handleInputChange={handleInputChange}
            errors={errors}
            formValues={formValues}
          />
        )}

        {currentFormStep === RESET_PASSWORD_FORM_STEPS.TYPE_NEW_PASSWORD && (
          <TypeNewPassword
            handleInputChange={handleInputChange}
            errors={errors}
            formValues={formValues}
          />
        )}

        <CustomButton
          text={customButtomText}
          customStyles={styles.signInButton}
          type="primary"
          onPress={handleCustomButton}
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
  textGroup: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OfflineResetPasswordForm;
