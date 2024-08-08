import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { BORDER_RADIUS, COLORS, PADDING } from "../../app/constants/styles";

interface CustomButtonProps {
  text: string;
  type: "standard" | "primary" | "secondary" | "info" | "danger" | "success";
  onPress: () => void;
}

const CustomButton = ({ type = "standard", text }: CustomButtonProps) => {
  const customButtonStyles = {
    ...styles.standard,
    ...BUTTON_STYLES_BY_TYPE[type],
  };

  return (
    <Pressable style={customButtonStyles}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  standard: {
    padding: PADDING,
    paddingHorizontal: PADDING * 1.5,
    borderRadius: BORDER_RADIUS,
    color: "#000",
    backgroundColor: "#fff",
  },
  primary: {
    color: "#000",
    backgroundColor: COLORS.PRIMARY,
  },
  secondary: {},
  info: {},
  danger: {},
  success: {},
});

const BUTTON_STYLES_BY_TYPE = {
  standard: styles.standard,
  primary: styles.primary,
  secondary: styles.secondary,
  info: styles.info,
  danger: styles.danger,
  success: styles.success,
};

export default CustomButton;
