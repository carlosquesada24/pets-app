import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { useLocalSearchParams } from "expo-router";
import { usePets } from "../infrastructure/context/PetsContext";
import CustomButton from "../../../../components/Button";
import { Pet } from "../domain/interface";

const PetDetailsView = () => {
  const { id } = useLocalSearchParams();

  const { petsList } = usePets();

  const foundPet = petsList[0] as Pet;

  return (
    <View>
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
          <View style={{ marginTop: 12 }}>
            <Text style={styles.text}>Diagnoses</Text>
            {foundPet.details.medical.diagnoses.map((diagnosis) => (
              <View>
                <Text style={styles.text}>{diagnosis.date}</Text>
                <Text style={styles.text}>{diagnosis.text}</Text>
              </View>
            ))}
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={styles.text}>Allergies</Text>

            {foundPet.details.medical.allergies.length > 0 ? (
              foundPet.details.medical.allergies.map((vaccine) => (
                <View>
                  <Text style={styles.text}>{vaccine.name}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.text}>¡No hay alergias aún!</Text>
            )}
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={styles.text}>Medicines</Text>

            {foundPet.details.medical.medicines.length > 0 ? (
              foundPet.details.medical.medicines.map((vaccine) => (
                <View>
                  <Text style={styles.text}>{vaccine.name}</Text>
                  <Text style={styles.text}>{vaccine.frequency}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.text}>¡No hay medicinas aún!</Text>
            )}
          </View>

          <View style={{ marginTop: 12 }}>
            <Text style={styles.text}>Vaccines</Text>
            {foundPet.details.medical.vaccines.length > 0 ? (
              foundPet.details.medical.vaccines.map((vaccine) => (
                <View>
                  <Text style={styles.text}>{vaccine.name}</Text>
                  <Text style={styles.text}>{vaccine.date}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.text}>¡No hay vaccunas aún!</Text>
            )}
          </View>
        </View>
      </View>
    </View>
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
