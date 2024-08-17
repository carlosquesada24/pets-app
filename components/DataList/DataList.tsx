import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Button";
import { randomUUID } from "expo-crypto";
import { formatTextPreview } from "../../app/utils/string";
import ListItem from "./components/ListItem/ListItem";

interface DataListProps {
  dataList: any[];
  title: string;
  handleAddItem: any;
}

interface ListItem {
  id: string;
  date: string;
  name: string;
  isEditing: boolean;
}

const DataList = ({ dataList, title, handleAddItem }: DataListProps) => {
  const [list, setList] = useState<any[]>(dataList);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleAddItemPress = () => {
    // setList([
    //   ...list,
    //   {
    //     date: new Date().toLocaleDateString(),
    //     name: "New item",
    //   },
    // ]);
    setIsCreating(true);

    // Crear nuevo elemento en el list
    setList([
      ...list,
      { id: randomUUID(), name: "", date: "17/08/2024", isCreating: true },
    ]);
  };

  const handleEditItem = (item: any) => {
    setIsEditing(true);
  };

  const handleOnAcceptCreation = (id: any, text: string) => {
    setIsCreating(false);
    setIsEditing(false);

    const foundItem = list.find((item) => item.id === id);

    const updatedItem = {
      ...foundItem,
      name: text,
      isCreating: false,
    };

    const updatedList = list.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    setList(updatedList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.text, ...styles.title }}>{title}</Text>
        <CustomButton
          customStyles={styles.customButton}
          type="primary"
          text="+"
          onPress={handleAddItemPress}
        />
      </View>
      <View style={styles.list}>
        {list.length > 0 ? (
          list.map((item) => {
            return (
              <ListItem
                item={item}
                handleOnAcceptCreation={handleOnAcceptCreation}
              />
            );
          })
        ) : isCreating ? (
          <Text style={styles.text}>Creando uno nuevo...z</Text>
        ) : (
          <Text style={styles.text}>No hay items aún</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  customButton: {
    padding: 6,
    fontWeight: "bold",
  },
  list: {
    marginTop: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "column",
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
});

export default DataList;
