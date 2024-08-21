import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../../../../../components/Button";

interface ButtonsGroupProps {
  currentFormStep: number;
  firstFormStep: number;
  lastFormStep: number;
  prevStep: () => void;
  nextStep: () => void;
  handleSubmit: () => void;
}

const ButtonsGroup = (props: ButtonsGroupProps) => {
  const {
    currentFormStep,
    firstFormStep,
    lastFormStep,
    prevStep,
    nextStep,
    handleSubmit,
  } = props;

  return (
    <View style={styles.buttonGroup}>
      {currentFormStep !== firstFormStep && (
        <CustomButton text="Anterior" type="primary" onPress={prevStep} />
      )}

      {currentFormStep !== lastFormStep && (
        <CustomButton text="Siguiente" type="primary" onPress={nextStep} />
      )}

      {currentFormStep === lastFormStep && (
        <CustomButton text="Guardar" type="primary" onPress={handleSubmit} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});

export default ButtonsGroup;
