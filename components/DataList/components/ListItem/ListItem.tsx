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
import { SafeAreaView } from "react-native-safe-area-context";

interface ListItemProps {
  item: any;
  handleOnAcceptCreation: Function;
  handleOnEditListItem: Function;
  handleOnAcceptEditListItem: Function;
  handleOnDeleteListItem: Function;
}

const ListItem = ({
  item,
  handleOnAcceptCreation,
  handleOnEditListItem,
  handleOnAcceptEditListItem,
  handleOnDeleteListItem,
}: ListItemProps) => {
  const [textInput, setTextInput] = useState("");
  const [isCreating, IsCreating] = useState<boolean>(item.isCreating);

  return (
    <SafeAreaView style={styles.listItem}>
      <Text style={styles.text}>{item.date}</Text>
      <View style={styles.listItemContent}>
        {isCreating ? (
          <View style={styles.listItemEditLine}>
            <TextInput
              style={styles.input}
              placeholder="Texto..."
              placeholderTextColor="#a3a2a2"
              multiline={true}
              onChangeText={(text) => setTextInput(text)}
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text}>
              {formatTextPreview(item?.name ?? item?.text ?? "", 25)}
            </Text>

            <Pressable
              style={{ backgroundColor: "#666", padding: 8 }}
              onPress={() => handleOnEditListItem(item.id)}
            >
              <Text style={styles.text}>Edit</Text>
            </Pressable>

            <Pressable
              style={{ backgroundColor: "#666", padding: 8 }}
              onPress={() => {
                handleOnDeleteListItem(item.id);
              }}
            >
              <Text style={styles.text}>Delete</Text>
            </Pressable>
          </View>
        )}
      </View>
    </SafeAreaView>
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

    width: "50%",

    borderWidth: 2,
    borderColor: "#242424",
    flex: 2,
    alignSelf: "stretch",
  },
  listItem: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 8, // ********************************
    paddingBottom: 8, // ********************************
    width: "50%",
  },
  listItemContent: {
    marginLeft: 24,
    width: "100%",
  },
  container: {
    // padding: 12,
    marginBottom: 12,
    width: "100%",
  },
  listItemEditLine: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    width: "100%",
  },
});

export default ListItem;
