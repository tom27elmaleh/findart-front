import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
// import FontAwesome from 'react-native-vector-icons/Ionicons';
import FontAwesome from "react-native-vector-icons/MaterialIcons";
import Tags from "../utils/Tags";
import { useNavigation } from "@react-navigation/native";

export default function ArtistCard(props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("ArtistDetails", props)}
    >
      <View style={styles.identity}>
        <View style={styles.picName}>
          <View>
            <Image
              source={{
                uri: `https://findart-back.vercel.app/assets/magicien.jpg`,
              }}
              style={styles.iconArtist}
            />
          </View>
          <View>
            <Text style={styles.name}>{props.username}</Text>
            <Text>{props.type}</Text>
            <Text>Tarif: {props.rate}€/heure</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.location}>
            <FontAwesome name="location-pin" color="orange" size={25} />
            <Text style={styles.locationName}>{props.city}</Text>
          </View>
          <FontAwesome name="keyboard-arrow-right" color={"black"} size={50} />
        </View>
      </View>
      <View style={styles.tags}>
        {props.style && <Tags tagName={props.style} />}
        {props.event && <Tags tagName={props.event} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: -5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    paddingVertical: 10,
    elevation: 6,
  },
  identity: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picName: {
    flexDirection: "row",
    // backgroundColor: 'green',
    width: 160,
    height: 130,
    padding: 15,
  },
  location: {
    // backgroundColor: 'purple',
    flexDirection: "row",
    width: 80,
    height: 70,
    padding: 10,
    paddingRight: 10,
  },
  iconArtist: {
    width: 85,
    height: 85,
    borderRadius: 50,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
  },
  locationName: {
    fontSize: 11,
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingRight: 10,
    paddingTop: 10,
  },
  tags: {
    flexDirection: "row",
  },
});
