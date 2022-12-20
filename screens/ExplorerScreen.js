import {
  SafeAreaView,
  Text,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import Header from "../utils/Header";

export default function ExplorerScreen() {
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.10.188:3000/artists")
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
    <>
      <Header name="Tous les artistes" />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {artist}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  filterButtonText: {
    paddingVertical: 10,
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  filterButton: {
    alignItems: "center",
    width: "60%",
    backgroundColor: "#2A9D8F",
    borderRadius: 10,
    position: "sticky",
    bottom: 60,
  },
});
