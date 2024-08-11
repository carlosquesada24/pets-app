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
        <Text style={{ ...styles.text, ...styles.title }}>{title}</Text>
        <CustomButton
          customStyles={styles.customButton}
          type="primary"
          text="+"
          onPress={() => {}}
        />
      </View>
      <View style={styles.list}>
        {dataList.map((item, index) => {
          return (
            <View key={index} style={styles.listItem}>
              <Text style={styles.text}>{item.date}</Text>
              <View style={styles.listItemContent}>
                <Text style={styles.text}>{item.name ?? item.text}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
  header: {
    width: "100%",
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
    alignItems: "center",
    flexDirection: "column",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  listItemContent: {
    marginLeft: 12,
  },
  container: {
    width: "100%",
    padding: 12,
  },
});

export default DataList;
