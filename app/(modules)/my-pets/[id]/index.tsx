import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { usePets } from "../infrastructure/context/PetsContext";
import CustomButton from "../../../../components/Button";
import { Pet } from "../domain/interface";
import DataList from "../../../../components/DataList/DataList";

const PetDetailsView = () => {
  const { id } = useLocalSearchParams();

  const { petsList } = usePets();

  const foundPet = petsList[0] as Pet;

  return (
    <ScrollView style={{ width: "100%" }}>
      <View style={styles.header}>
        <Text style={{ ...styles.text, ...styles.title }}>{foundPet.name}</Text>

        <CustomButton type="danger" text={"Delete"} onPress={() => {}} />
      </View>
      <Image src={foundPet.photoURL} width={100} height={100} />

      <View>
        <Text style={styles.text}>Information</Text>
        <View>
          <Text style={styles.text}>
            Height: {foundPet.details.information.height}
          </Text>
          <Text style={styles.text}>
            Weight: {foundPet.details.information.weight}
          </Text>
          <Text style={styles.text}>
            Age: {foundPet.details.information.age}
          </Text>
          <Text style={styles.text}>
            Breed: {foundPet.details.information.breed}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.text}>Medical</Text>
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
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default PetDetailsView;
