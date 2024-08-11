import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Button";

interface DataListProps {
  dataList: any[];
  title: string;
}

const DataList = ({ dataList, title }: DataListProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <CustomButton type="primary" text="+" onPress={() => {}} />
      </View>
      <View style={styles.list}>
        <View>
          <Text>24-07-2024</Text>
          <View>
            <Text>Title of the item</Text>
            <Text>Lorem ipsum lorem ipsum lorem ipsum lore...</Text>
          </View>
        </View>
      </View>
      {/* <View>
        <button className="pagination-button">&lt;</button>
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <span>...</span>
        <button className="pagination-button">8</button>
        <button className="pagination-button">&gt;</button>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  container: {
    width: "100%",
  },
});

export default DataList;
