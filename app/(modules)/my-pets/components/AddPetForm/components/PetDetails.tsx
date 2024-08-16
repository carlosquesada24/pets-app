import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface PetDetailsProps {
  weight: string;
  setWeight: (weight: string) => void;
  height: string;
  setHeight: (height: string) => void;
  age: string;
  setAge: (age: string) => void;
  breed: string;
  setBreed: (breed: string) => void;
}

const PetDetails = (props: PetDetailsProps) => {
  const { weight, setWeight, height, setHeight, age, setAge, breed, setBreed } =
    props;

  return (
    <View>
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
    </View>
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

export default PetDetails;
