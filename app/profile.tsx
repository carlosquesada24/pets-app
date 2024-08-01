import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView, TextInput } from "react-native";

const profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <TextInput style={style.text}>Profile</TextInput>

      <TextInput style={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione perferendis, natus harum omnis dolor cupiditate aspernatur aut
        facere. Odio atque iusto odit hic facilis architecto eum beatae commodi
        totam.
      </TextInput>
      <TextInput style={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione perferendis, natus harum omnis dolor cupiditate aspernatur aut
        facere. Odio atque iusto odit hic facilis architecto eum beatae commodi
        totam.
      </TextInput>
      <TextInput style={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione perferendis, natus harum omnis dolor cupiditate aspernatur aut
        facere. Odio atque iusto odit hic facilis architecto eum beatae commodi
        totam.
      </TextInput>
      <TextInput style={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione perferendis, natus harum omnis dolor cupiditate aspernatur aut
        facere. Odio atque iusto odit hic facilis architecto eum beatae commodi
        totam.
      </TextInput>
      <TextInput style={style.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        ratione perferendis, natus harum omnis dolor cupiditate aspernatur aut
        facere. Odio atque iusto odit hic facilis architecto eum beatae commodi
        totam.
      </TextInput>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  text: {
    color: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
});

export default profile;
