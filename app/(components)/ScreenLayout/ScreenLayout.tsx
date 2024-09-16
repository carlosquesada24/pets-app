import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { THEMES } from "../../constants/styles";

const ScreenLayout = ({ children }: { children: React.JSX.Element }) => {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
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
