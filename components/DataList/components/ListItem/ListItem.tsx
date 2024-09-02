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
  onAcceptEdition: Function;
  onEditListItem: Function;
  handleEditListItem: Function;
  onDeleteListItem: Function;
}

const ListItem = ({
  item,
  onAcceptEdition,
  onEditListItem,
  handleEditListItem,
  onDeleteListItem,
}: ListItemProps) => {
  const [textInput, setTextInput] = useState(item?.name ?? item?.text ?? "");
  const [isEditing, setIsEditing] = useState<boolean>(item.isEditing);

  return (
    <SafeAreaView style={styles.listItem}>
      <Text style={styles.text}>{item.date}</Text>
      <View style={styles.listItemContent}>
        {isEditing ? (
          <View style={styles.listItemEditLine}>
            <TextInput
              style={styles.input}
              placeholder="Texto..."
              placeholderTextColor="#a3a2a2"
              multiline={true}
              onChangeText={(text) => setTextInput(text)}
              value={textInput}
            />

            <Pressable
              style={{ backgroundColor: "#666", padding: 8 }}
              onPress={() => {
                onAcceptEdition(item.id, textInput);
                setIsEditing(false);
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
              onPress={() => onEditListItem(item.id)}
            >
              <Text style={styles.text}>Edit</Text>
            </Pressable>

            <Pressable
              style={{ backgroundColor: "#666", padding: 8 }}
              onPress={() => {
                onDeleteListItem(item.id);
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
