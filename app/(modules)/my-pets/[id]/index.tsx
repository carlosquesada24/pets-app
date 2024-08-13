import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { usePets } from "../infrastructure/context/PetsContext";
import CustomButton from "../../../../components/Button";
import { Pet } from "../domain/interface";
import DataList from "../../../../components/DataList/DataList";

import { capitalizeFirstLetter } from "../../../utils/string";

const PetDetailsView = () => {
  const { id } = useLocalSearchParams();

  const { petsList } = usePets();

  const foundPet = petsList[0] as Pet;

  const informationDetailsEntries = Object.entries(
    foundPet.details.information
  );

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={{ ...styles.text, ...styles.pageTitle }}>
          {foundPet.name}
        </Text>

        <CustomButton
          type="danger"
          text={"Delete"}
          // customStyles={{ position: "absolute" }}
          onPress={() => {}}
        />
      </View>
      <Image src={foundPet.photoURL} width={100} height={100} />

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
                {capitalizeFirstLetter(value)}
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
            dataList={foundPet.details.medical.diagnoses}
          />
          <DataList
            title="Allergies"
            dataList={foundPet.details.medical.allergies}
          />
          <DataList
            title="Medicines"
            dataList={foundPet.details.medical.medicines}
          />
          <DataList
            title="Vaccines"
            dataList={foundPet.details.medical.vaccines}
          />
        </View>
      </View>
    </ScrollView>
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
    marginBottom: 24,
    flex: 1,
    flexWrap: "wrap",
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
    marginBottom: 12,
  },
});

export default PetDetailsView;
