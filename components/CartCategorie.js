import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useFonts } from "expo-font";

export default function CartCategorie(props) {
  return (
    <View style={styles.containerImg}>
      <Image
        source={{
          uri: `https://findart-back.vercel.app/assets/${props.image}`,
        }}
        style={styles.Img}
      />
      <View style={styles.boderText}>
        <Text>{props.name}</Text>
      </View>
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
    width: 118,
    height: 93,
    marginBottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  boderText: {
    borderColor: "gray",
    borderWidth: 0.5,
    width: "98%",
    height: "23%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 1,
  },
});
