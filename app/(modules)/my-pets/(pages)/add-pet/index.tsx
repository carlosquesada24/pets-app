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
import CustomButton from "../../../../../components/Button";

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
      <Text
        style={{
          ...styles.text,
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 12,
        }}
      >
        Agregar mascota
      </Text>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Ejemplo: Max"
          placeholderTextColor="#a3a2a2"
          onChange={(e) => setName(e.nativeEvent.text)}
        />

        <Text
          style={{
            ...styles.text,
            marginTop: 12,
            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Detalles
        </Text>
        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Peso</Text>
          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 12"
            placeholderTextColor="#a3a2a2"
            onChange={(e) => setWeight(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Altura</Text>

          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 80"
            placeholderTextColor="#a3a2a2"
            onChange={(e) => setHeight(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Edad</Text>

          <TextInput
            style={styles.input}
            placeholder="Ejemplo: 5"
            placeholderTextColor="#a3a2a2"
            onChange={(e) => setAge(e.nativeEvent.text)}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={{ ...styles.text, ...styles.label }}>Raza</Text>

          <TextInput
            style={styles.input}
            placeholder="Ejemplo: Pastor Alemán"
            placeholderTextColor="#a3a2a2"
            onChange={(e) => setBreed(e.nativeEvent.text)}
          />
        </View>

        <View style={{ marginBottom: 12, marginTop: 12 }}>
          <Text
            style={{
              ...styles.text,
              marginTop: 12,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Médico
          </Text>
          <DataList title="Diagnoses" dataList={[]} />
          <DataList title="Allergies" dataList={[]} />
          <DataList title="Medicines" dataList={[]} />
          <DataList title="Vaccines" dataList={[]} />
        </View>

        {/* <Button onPress={handleSubmit} title="Guardar" /> */}

        <CustomButton text="Guardar" type="primary" onPress={handleSubmit} />
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
    backgroundColor: "transparent",
    color: "#fff",
    marginTop: 4,
    borderWidth: 2,
    borderColor: "#242424",
  },
});

export default AddPetView;
