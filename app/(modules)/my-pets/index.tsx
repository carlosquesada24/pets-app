import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import CustomButton from "../../../components/Button";
import PetsGrid from "./components/PetsGrid/PetsGrid";
import { usePets } from "./infrastructure/context/PetsContext";
import ScreenLayout from "../../(components)/ScreenLayout/ScreenLayout";
import { globalStyles } from "../../(styles)/global";
import { useRouter } from "expo-router";
import routes from "../../constants/routes";

const Index = () => {
  const { petsList } = usePets();

  const router = useRouter();

  const navigateToCreatePet = () => {
    router.push(routes.PETS.ADD_PET);
  };

  return (
    <ScreenLayout>
      <>
        <View style={styles.header}>
          <Text
            style={{ ...globalStyles.text, ...styles.text, ...styles.title }}
          >
            Mis mascotas
          </Text>

          <CustomButton
            text="Agregar"
            type="primary"
            onPress={navigateToCreatePet}
          />
        </View>

        <PetsGrid petsList={petsList} />
      </>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
  },
  header: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Index;
