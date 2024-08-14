import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import DataList from "../../../../../components/DataList/DataList";

const AddPetView = () => {
  return (
    <ScrollView style={{ width: "100%" }}>
      <Text style={styles.text}>Formulario de mascota</Text>

      <View>
        <TextInput style={styles.input} placeholder="Nombre" />

        <Text style={{ ...styles.text, marginTop: 12 }}>Detalles</Text>
        <TextInput style={styles.input} placeholder="Peso" />
        <TextInput style={styles.input} placeholder="Edad" />
        <TextInput style={styles.input} placeholder="Raza" />
        <TextInput style={styles.input} placeholder="Altura" />

        <Text style={{ ...styles.text, marginTop: 12 }}>Médico</Text>
        <DataList title="Diagnoses" dataList={[]} />
        <DataList title="Allergies" dataList={[]} />
        <DataList title="Medicines" dataList={[]} />
        <DataList title="Vaccines" dataList={[]} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  input: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#000",
    marginTop: 16,
  },
});

export default AddPetView;
