import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface PetDetailsProps {
  formValues: any;
  handleInputChange: Function;
  errors: any;
}

const PetDetails = (props: PetDetailsProps) => {
  const { handleInputChange, errors } = props;

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
          onChangeText={(text) => handleInputChange("weight", text)}
        />
        {errors.weight &&
          errors.weight.map((error: string, index: number) => (
            <Text key={index} style={{ color: "red" }}>
              {error}
            </Text>
          ))}
      </View>

      <View style={styles.formGroup}>
        <Text style={{ ...styles.text, ...styles.label }}>Altura</Text>

        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 80"
          placeholderTextColor="#a3a2a2"
          onChangeText={(text) => handleInputChange("height", text)}
        />
        {errors.height &&
          errors.height.map((error: string, index: number) => (
            <Text key={index} style={{ color: "red" }}>
              {error}
            </Text>
          ))}
      </View>

      <View style={styles.formGroup}>
        <Text style={{ ...styles.text, ...styles.label }}>Edad</Text>

        <TextInput
          style={styles.input}
          placeholder="Ejemplo: 5"
          placeholderTextColor="#a3a2a2"
          onChangeText={(text) => handleInputChange("age", text)}
        />

        {errors.age &&
          errors.age.map((error: string, index: number) => (
            <Text key={index} style={{ color: "red" }}>
              {error}
            </Text>
          ))}
      </View>

      <View style={styles.formGroup}>
        <Text style={{ ...styles.text, ...styles.label }}>Raza</Text>

        <TextInput
          style={styles.input}
          placeholder="Ejemplo: Pastor Alemán"
          placeholderTextColor="#a3a2a2"
          onChangeText={(text) => handleInputChange("breed", text)}
        />

        {errors.breed &&
          errors.breed.map((error: string, index: number) => (
            <Text key={index} style={{ color: "red" }}>
              {error}
            </Text>
          ))}
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
