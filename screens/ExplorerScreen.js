import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import Header from "../utils/Header";


export default function ExplorerScreen() {
  

  const [artistData, setArtistData] = useState([]);
  
  useEffect(() => {
    fetch("http://192.168.10.138:3000/artists")
    .then((response) => response.json())
    .then((data) => {
        // console.log('event =>', data.style);
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
      <Header name="Tous les artistes"/>
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

});
