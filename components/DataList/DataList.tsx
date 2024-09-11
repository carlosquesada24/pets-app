import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Button";
import ListItem from "./components/ListItem/ListItem";
import { formatDate } from "../../app/utils/date";
import { randomUUID } from "expo-crypto";

interface DataListProps {
  dataList: any[];
  title: string;
  handleAddItem: any;
  handleEditItem?: any;
  handleDeleteItem?: any;
}

interface ListItem {
  id: string;
  date: string;
  name: string;
  isEditing?: boolean;
  isCreating?: boolean;
}

type ListItemModes = "CREATING" | "EDITING" | "VIEWING";

const LIST_ITEM_MODES = {
  CREATING: "CREATING",
  EDITING: "EDITING",
  VIEWING: "VIEWING",
};

const DataList = ({
  dataList,
  title,
  handleAddItem,
  handleEditItem,
  handleDeleteItem,
}: DataListProps) => {
  const [list, setList] = useState<any[]>(dataList);
  const [listItemModes, setListItemModes] = useState<ListItemModes>("VIEWING");
  const isListItemOnEditMode = listItemModes === "EDITING";

  useEffect(() => {
    setList(dataList);
  }, [dataList]);

  const onAddNewListItem = () => {
    setListItemModes("CREATING");

    setList([
      ...list,
      {
        id: randomUUID(),
        date: formatDate(new Date()),
        text: "",
        isEditing: true,
      },
    ]);
  };

  const onAcceptEdition = (id: any, text: string) => {
    const foundItem = list.find((item) => item.id === id);

    const editedItem = {
      ...foundItem,
      text,
      isEditing: false,
    };

    const updatedList = list.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...editedItem,
        };
      }
      return item;
    });

    setListItemModes("VIEWING");
    setList(updatedList);

    isListItemOnEditMode
      ? handleEditItem(editedItem)
      : handleAddItem(editedItem);
  };

  const onEditListItem = (id: string) => {
    setListItemModes("EDITING");

    const updatedList = list.map((listItem) => {
      if (listItem.id === id) {
        return {
          ...listItem,
          isEditing: true,
        };
      }
      return listItem;
    });

    setList(updatedList);
  };

  const onDeleteListItem = (listItemId: string) => {
    const updatedList = list.filter((listItem) => listItem.id !== listItemId);

    setList(updatedList);
    handleDeleteItem(listItemId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ ...styles.text, ...styles.title }}>{title}</Text>
        <CustomButton
          customStyles={styles.customButton}
          type="primary"
          text="+"
          onPress={onAddNewListItem}
        />
      </View>
      <View style={styles.list}>
        {list.length > 0 ? (
          list.map((item) => {
            return (
              <ListItem
                key={randomUUID()}
                item={item}
                onAcceptEdition={onAcceptEdition}
                onEditListItem={onEditListItem}
                handleEditListItem={handleEditItem} // Revisar
                onDeleteListItem={onDeleteListItem}
              />
            );
          })
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
