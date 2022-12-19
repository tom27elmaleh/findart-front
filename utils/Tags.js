import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Tags(props) {
  return (
    <View style={styles.containerTag}>
      <Text style={styles.textTag}>{props.tagName}</Text>
    </View>
  );
}

styles = StyleSheet.create({
  containerTag: {
    backgroundColor: "#264653",
    width: 100,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  textTag: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    fontSize: 10,
  },
});
