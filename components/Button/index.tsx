import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  StyleProp,
  Button,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { BORDER_RADIUS, COLORS, PADDING } from "../../app/constants/styles";

interface CustomButtonProps {
  customStyles?: any;
  text: string;
  type:
    | "standard"
    | "primary"
    | "secondary"
    | "info"
    | "danger"
    | "success"
    | "dark";
  onPress: () => void;
}

const CustomButton = ({
  customStyles,
  type = "standard",
  text,
  onPress,
}: CustomButtonProps) => {
  const customButtonStyles = {
    ...styles.standard,
    ...BUTTON_STYLES_BY_TYPE[type],
    ...customStyles,
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? "rgb(210, 230, 255)"
            : BUTTON_STYLES_BY_TYPE[type],
        },
        customButtonStyles,
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          textAlign: "center",
          color: customButtonStyles.color,
          fontWeight: customButtonStyles.fontWeight,
        }}
      >
        {text}
      </Text>
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
  secondary: {
    color: "#FFF",
    backgroundColor: COLORS.SECONDARY,
  },
  info: {},
  danger: {
    color: "#fff",
    backgroundColor: COLORS.DANGER,
  },
  success: {},
  dark: {
    color: COLORS.BUTTON_DARK_TEXT,
    backgroundColor: COLORS.BUTTON_DARK_BG,
  },
});

const BUTTON_STYLES_BY_TYPE = {
  standard: styles.standard,
  primary: styles.primary,
  secondary: styles.secondary,
  info: styles.info,
  danger: styles.danger,
  success: styles.success,
  dark: styles.dark,
};

export default CustomButton;
