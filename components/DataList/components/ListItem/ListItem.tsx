import React, { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { formatTextPreview } from "../../../../app/utils/string";

interface ListItemProps {
  item: any;
  handleOnAcceptCreation: Function;
}

const ListItem = ({ item, handleOnAcceptCreation }: ListItemProps) => {
  const [textInput, setTextInput] = useState("");
  const [isCreating, IsCreating] = useState<boolean>(item.isCreating);

  return (
    <View key={item.id} style={styles.listItem}>
      <Text style={styles.text}>{item.date}</Text>
      <View style={styles.listItemContent}>
        {isCreating ? (
          <View style={styles.pene}>
            <TextInput
              style={styles.input}
              placeholder="Texto..."
              placeholderTextColor="#a3a2a2"
              onChange={(e) => setTextInput(e.nativeEvent.text)}
            />

            <Pressable
              style={{ backgroundColor: "#666", padding: 8 }}
              onPress={() => {
                handleOnAcceptCreation(item.id, textInput);
                IsCreating(false);
              }}
            >
              <Text style={styles.text}>{"=>"}</Text>
            </Pressable>
          </View>
        ) : (
          <Text style={styles.text}>
            {formatTextPreview(item.name ?? item.text ?? "", 25)}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  input: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: "transparent",
    color: "#fff",

    borderWidth: 2,
    borderColor: "#242424",
  },
  listItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 8, // ********************************
    paddingBottom: 8, // ********************************
    width: "100%",
  },
  listItemContent: {
    marginLeft: 24,
  },
  container: {
    width: "100%",
    // padding: 12,
    marginBottom: 12,
  },
  pene: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});

export default ListItem;
