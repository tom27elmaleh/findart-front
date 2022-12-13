import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import CartCategorie from "../components/CartCategorie";

export default function Categorie() {
  const cartData = [
    {
      image: require("../assets/dance.jpg"),
      name: "Danse",
    },
    {
      image: require("../assets/musiscien.jpg"),
      name: "Musique",
    },
    {
      image: require("../assets/peintre.jpg"),
      name: "Design",
    },
    {
      image: require("../assets/photo.jpg"),
      name: "Photo",
    },
  ];

  const card = cartData.map((data, i) => {
    return <CartCategorie key={i} img={data.image} title={data.name} />;
  });
  return (
    <View style={styles.caroussel}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {card}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  caroussel: {
    overflow: "scroll",
    alignItems: "center",
    flexDirection: "row",

    width: "100%",
    height: 170,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 3,
  },
});
