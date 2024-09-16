import { Link } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CustomButton from "../../../../../../components/Button";
import ROUTES from "../../../../../constants/routes";
import ScreenLayout from "../../../../../(components)/ScreenLayout/ScreenLayout";

const ProfilePage = () => {
  return (
    <ScreenLayout>
      <>
        <View style={styles.container}>
          <Text style={styles.title}>Perfil</Text>

          <View style={styles.group}>
            <Text style={styles.subtitle}>Información de usuario</Text>

            <View style={styles.formGroup}>
              <Text style={{ ...styles.text, ...styles.label }}>
                Correo electrónico
              </Text>
              <TextInput
                editable={false}
                style={styles.input}
                value="admin@example.com"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={{ ...styles.text, ...styles.label }}>
                Número de teléfono
              </Text>
              <TextInput
                editable={false}
                style={styles.input}
                value="+506 8487-8116"
              />
            </View>

            <Link
              style={{ paddingTop: 16, paddingBottom: 16 }}
              href={ROUTES.AUTHENTICATION.RESET_PASSWORD}
              asChild
            >
              <Pressable>
                <View
                  style={{
                    ...styles.formGroup,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text style={{ ...styles.text, ...styles.label }}>
                      Cambiar contraseña
                    </Text>
                    <Text style={{ fontSize: 14, color: "#a1a1a1" }}>
                      En cualquier momento
                    </Text>
                  </View>

                  <Text style={styles.text}>{"=>"}</Text>
                </View>
              </Pressable>
            </Link>

            <CustomButton
              text="Eliminar cuenta"
              type="danger"
              customStyles={styles.deleteAccountButton}
              onPress={() => {}}
            />
          </View>

          <View>
            <Text style={styles.subtitle}>Preferencias</Text>
            <View style={styles.formGroup}>
              <Text style={{ ...styles.text, ...styles.label }}>Tema</Text>
              <TextInput editable={false} style={styles.input} value="Oscuro" />
            </View>
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
  container: {
    width: "100%",
  },
  group: {
    marginBottom: 24,
  },
  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  subtitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  formGroup: {
    marginTop: 8,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
  deleteAccountButton: {
    marginTop: 8,
    fontWeight: "bold",
  },
});

export default ProfilePage;
