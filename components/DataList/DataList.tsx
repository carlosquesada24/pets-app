import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../Button";
import { formatTextPreview } from "../../app/utils/string";

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
                <Text style={styles.text}>
                  {formatTextPreview(item.name ?? item.text, 25)}
                </Text>
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
