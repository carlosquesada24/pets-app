import React from "react";
import { ScrollView, View } from "react-native";

const ScreenLayout = ({ children }: { children: React.JSX.Element }) => {
  return (
    <ScrollView style={{ backgroundColor: "#000", height: "100%" }}>
      {children}
    </ScrollView>
  );
};

export default ScreenLayout;
