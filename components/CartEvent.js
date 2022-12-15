import { View, Image, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CartCategorie from "./CartCategorie";

export default function Event() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    fetch("https://findart-back.vercel.app/events")
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.allEvent);
      });
  }, []);

  const events = event.map((data, i) => {
    return <CartCategorie key={i} name={data.name} image={data.image} />;
  });
  return (
    <View style={styles.caroussel}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {events}
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
