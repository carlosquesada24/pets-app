import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { THEMES } from "../../constants/styles";

interface ScreenLayoutProps {
  children: React.JSX.Element;
  onLayout?: () => void;
}

const ScreenLayout = ({ children, onLayout }: ScreenLayoutProps) => {
  return (
    <ScrollView style={styles.container} onLayout={onLayout}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingTop: 12,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: THEMES.DARK.BACKGROUND_COLOR,
  },
});

export default ScreenLayout;
