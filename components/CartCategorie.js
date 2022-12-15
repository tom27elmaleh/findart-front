import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function CartCategorie(props) {
  return (
    <View style={styles.containerImg}>
      <Image source={props.img} style={styles.Img} />
      <Text>{props.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  containerImg: {
    width: 120,
    height: 130,
    borderRadius: 15,
    alignItems: "center",
    marginRight: 20,
    marginLeft: 10,
    borderColor: "black",
  },
  Img: {
    width: 120,
    height: 100,
    marginBottom: 3,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
