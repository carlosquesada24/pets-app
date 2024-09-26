import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { Link, useLocalSearchParams } from "expo-router";
import { usePets } from "../infrastructure/context/PetsContext";
import CustomButton from "../../../../components/Button";
import DataList from "../../../../components/DataList/DataList";

import { capitalizeFirstLetter } from "../../../utils/string";
import ScreenLayout from "../../../(components)/ScreenLayout/ScreenLayout";

const PetDetailsView = () => {
  const [foundPet, setFoundPet] = useState<any>();

  const { id } = useLocalSearchParams();

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
            onPress={() => deletePetById(Array.isArray(id) ? id[0] : id)}
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
            Information
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
            Medical
          </Text>
          <View>
            <DataList
              title="Diagnoses"
              dataList={foundPet?.details?.medical?.diagnoses ?? []}
              handleAddItem={() => {}}
            />
            <DataList
              title="Allergies"
              dataList={foundPet?.details?.medical?.allergies ?? []}
              handleAddItem={() => {}}
            />
            <DataList
              title="Medicines"
              dataList={foundPet?.details?.medical?.medicines ?? []}
              handleAddItem={() => {}}
            />
            <DataList
              title="Vaccines"
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
