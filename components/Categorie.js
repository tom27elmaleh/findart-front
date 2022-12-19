import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import CartCategorie from "../components/CartCategorie";
import { useNavigation } from '@react-navigation/native'; 

export default function Categorie() {

  const navigation = useNavigation(); 
  const cartData = [
    {
      image: "dance.jpg",
      name: "Danse",
    },
    {
      image: "musiscien.jpg",
      name: "Musique",
    },
    {
      image: "peintre.jpg",
      name: "Design",
    },
    {
      image: "photo.jpg",
      name: "Photo",
    },
  ];

  const card = cartData.map((data, i) => {
    return <TouchableOpacity key={i} onPress={() => navigation.navigate('ArtistCategory', {type: data.name})}><CartCategorie image={data.image} name={data.name} /></TouchableOpacity>;
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
    backgroundColor: "white",

    width: "100%",
    height: 170,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
