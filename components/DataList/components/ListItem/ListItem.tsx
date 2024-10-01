import React, { useEffect, useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { formatDate } from "../../../../app/utils/date";
import CustomButton from "../../../Button";

interface ListItemProps {
  item: any;
  onAcceptEdition: Function;
  onEditListItem: Function;
  handleEditListItem: Function;
  onDeleteListItem: Function;
}

const ListItemHeader = (props: {
  itemId: string;
  itemDate: string;
  isEditing: boolean;
  onEditListItem: Function;
  onDeleteListItem: Function;
}) => {
  const { itemId, itemDate, isEditing, onEditListItem, onDeleteListItem } =
    props;

  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8,
      }}
    >
      {/* FECHA */}
      <Text style={{ ...styles.text, fontWeight: "bold" }}>{itemDate}</Text>

      {/* BOTONES */}
      {!isEditing && (
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              backgroundColor: "#666",
              padding: 8,
              marginRight: 6,
              borderRadius: 8,
            }}
            onPress={() => onEditListItem(itemId)}
          >
            <Text style={styles.text}>Editar</Text>
          </Pressable>

          <CustomButton
            type="danger"
            customStyles={{
              padding: 8,
              borderRadius: 8,
            }}
            onPress={() => {
              onDeleteListItem(itemId);
            }}
            text="Eliminar"
          ></CustomButton>
        </View>
      )}
    </View>
  );
};

const ListItemContent = (props: {
  textInput: string;
  setTextInput: Function;
  itemId: string;
  itemName: string;
  itemText: string;
  isEditing: boolean;
  onAcceptEdition: Function;
  setIsEditing: Function;
}) => {
  const {
    textInput,
    setTextInput,
    itemId,
    itemName,
    itemText,
    isEditing,
    onAcceptEdition,
    setIsEditing,
  } = props;

  return (
    <View style={styles.listItemContent}>
      {isEditing ? (
        <View style={styles.listItemEditLine}>
          <TextInput
            style={{ ...styles.input, width: "100%" }}
            placeholder="Texto..."
            placeholderTextColor="#a3a2a2"
            multiline={true}
            onChangeText={(text) => setTextInput(text)}
            value={textInput}
          />

          <Pressable
            style={{
              backgroundColor: "#666",
              padding: 8,
              marginTop: 8,
              borderRadius: 8,
            }}
            onPress={() => {
              onAcceptEdition(itemId, textInput);
              setIsEditing(false);
            }}
          >
            <Text style={styles.text}>{"Aceptar"}</Text>
          </Pressable>
        </View>
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {/* TEXTO */}
          <Text style={styles.text}>{itemName ?? itemText ?? ""}</Text>
        </View>
      )}
    </View>
  );
};

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
      {/* HEADER */}
      <ListItemHeader
        itemDate={
          item?.date ?? formatDate(new Date(item?.createdAt ?? "")) ?? ""
        }
        itemId={item.id}
        isEditing={isEditing}
        onEditListItem={onEditListItem}
        onDeleteListItem={onDeleteListItem}
      />

      <ListItemContent
        textInput={textInput}
        setTextInput={setTextInput}
        itemId={item.id}
        itemName={item.name}
        itemText={item.text}
        isEditing={isEditing}
        onAcceptEdition={onAcceptEdition}
        setIsEditing={setIsEditing}
      />
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
    flexDirection: "column",
    paddingTop: 8, // ********************************
    paddingBottom: 8, // ********************************
    width: "100%",
  },
  listItemContent: {
    // marginLeft: 24,
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
    // flexDirection: "row",
    flexDirection: "column",
    width: "100%",
  },
});

export default ListItem;
