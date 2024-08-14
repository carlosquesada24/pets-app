import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import DataList from "../../../../../components/DataList/DataList";
import { usePets } from "../../infrastructure/context/PetsContext";

const AddPetView = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [breed, setBreed] = useState("");

  const [diagnosesList, setDiagnosesList] = useState([]);
  const [allergiesList, setAllergiesList] = useState([]);
  const [medicinesList, setMedicinesList] = useState([]);
  const [vaccinesList, setVaccinesList] = useState([]);

  const { addPet } = usePets();

  // Handle form submission
  const handleSubmit = () => {
    const petInfo = {
      id: "random",
      name: name,
      photoURL: "",
      details: {
        information: {
          height,
          weight,
          age,
          breed,
        },
        medical: {
          diagnoses: diagnosesList,
          allergies: allergiesList,
          medicines: medicinesList,
          vaccines: vaccinesList,
        },
      },
    };

    addPet(petInfo);
  };

  return (
    <ScrollView style={{ width: "100%" }}>
      <Text style={styles.text}>Formulario de mascota</Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChange={(e) => setName(e.nativeEvent.text)}
        />

        <Text style={{ ...styles.text, marginTop: 12 }}>Detalles</Text>
        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Peso"
            onChange={(e) => setWeight(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Altura</Text>

          <TextInput
            style={styles.input}
            placeholder="Altura"
            onChange={(e) => setHeight(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Edad</Text>

          <TextInput
            style={styles.input}
            placeholder="Edad"
            onChange={(e) => setAge(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Raza</Text>

          <TextInput
            style={styles.input}
            placeholder="Raza"
            onChange={(e) => setBreed(e.nativeEvent.text)}
          />
        </View>

        <Button onPress={handleSubmit} title="Guardar" />

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
  formGroup: {
    marginTop: 8,
  },
  label: {
    marginTop: 2,
  },
  input: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
    color: "#000",
    marginTop: 4,
  },
});

export default AddPetView;
