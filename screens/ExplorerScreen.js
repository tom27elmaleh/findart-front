import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";

export default function ExplorerScreen() {
  const navigation = useNavigation();

  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.10.187:3000/artists")
      .then((response) => response.json())
      .then((data) => {
        setArtistData(data.artistsData);
      });
  }, []);

  const artist = artistData.map((data, i) => {
    return (
      <ArtistCard
        key={i}
        username={data.username}
        city={data.address.city}
        type={data.type}
        rate={data.rate.hourly}
        dailyRate={data.rate.package}
        style={data.style}
        event={data.event.name}
        description={data.description}
        link={data.link}
      />
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name="arrow-back"
          color="#ffffff"
          size={25}
          style={{ marginRight: 50 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Tous les artistes</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {artist}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  header: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  scrollView: {
    // alignItems: 'flex-end',
  },
  headerContainer: {
    backgroundColor: "#264653",
    padding: 30,
    flexDirection: "row",
  },
});
