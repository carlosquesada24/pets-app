import React, { useEffect, useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { usePets } from "../infrastructure/context/PetsContext";
import CustomButton from "../../../../components/Button";
import DataList from "../../../../components/DataList/DataList";

import { capitalizeFirstLetter } from "../../../utils/string";
import ScreenLayout from "../../../(components)/ScreenLayout/ScreenLayout";
import ROUTES from "../../../constants/routes";

const PetDetailsView = () => {
  const [foundPet, setFoundPet] = useState<any>();

  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { getPetById, deletePetById } = usePets();

  useEffect(() => {
    const handleGetPetById = async () => {
      const pet = await getPetById(
        typeof id === "string" ? parseInt(id) : parseInt(id[0], 10)
      );

      setFoundPet(pet);
    };

    handleGetPetById();
  }, []);

  const informationDetailsEntries = Object.entries(
    foundPet?.details?.information ?? {}
  );

  const handleDeletePet = () => {
    Alert.alert("Eliminar mascota", "¿Está seguro?", [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Aceptar",
        onPress: async () => {
          await deletePetById(Array.isArray(id) ? id[0] : id);
          router.push(ROUTES.PETS.MY_PETS);
        },
      },
    ]);
  };

  return (
    <ScreenLayout>
      <>
        <View style={styles.header}>
          <View>
            <Link style={{ color: "#fff" }} href={"/my-pets"}>
              {"<"}
            </Link>
            <Text style={{ ...styles.text, ...styles.pageTitle }}>
              {foundPet?.name ?? "Not found"}
            </Text>
          </View>

          <CustomButton
            type="danger"
            text={"Delete"}
            onPress={() => handleDeletePet()}
          />
        </View>
        <Image
          source={{ uri: foundPet?.photoURL }}
          style={{ marginBottom: 12 }}
          width={360}
          height={360}
        />

        <View style={styles.detailsContainerGroup}>
          <Text
            style={{
              ...styles.text,
              ...styles.sectionTitle,
            }}
          >
            Características
          </Text>
          <View style={styles.informationItemsContainer}>
            {informationDetailsEntries.map(([key, value]) => (
              <View key={key}>
                <Text
                  style={{
                    ...styles.text,
                    ...styles.detailsLabel,
                  }}
                >
                  {capitalizeFirstLetter(key)}
                </Text>
                <Text style={{ ...styles.text, ...styles.detailsInfo }}>
                  {capitalizeFirstLetter(value as string)}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View>
          <Text
            style={{
              ...styles.text,
              ...styles.sectionTitle,
            }}
          >
            Información médica
          </Text>
          <View>
            <DataList
              title="Diagnósticos"
              dataList={foundPet?.details?.medical?.diagnoses ?? []}
              handleAddItem={() => {}}
            />
            <DataList
              title="Alergias"
              dataList={foundPet?.details?.medical?.allergies ?? []}
              handleAddItem={() => {}}
            />
            <DataList
              title="Medicinas"
              dataList={foundPet?.details?.medical?.medicines ?? []}
              handleAddItem={() => {}}
            />
            <DataList
              title="Vacunas"
              dataList={foundPet?.details?.medical?.vaccines ?? []}
              handleAddItem={() => {}}
            />
          </View>
        </View>
      </>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 24,
  },
  detailsContainerGroup: {
    marginBottom: 36,
  },
  detailsLabel: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
  },
  detailsInfo: {
    textAlign: "center",
    marginTop: 6,
  },
  informationItemsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
});

export default PetDetailsView;
