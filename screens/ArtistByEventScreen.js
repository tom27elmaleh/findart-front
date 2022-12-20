import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";

export default function EventSelectedScreen({ route }) {
  const [mariage, setMariage] = useState([]);
  const [privy, setPrivy] = useState([]);
  const [cours, setCours] = useState([]);

  useEffect(() => {
    if (route.params.name === "Mariage") {
      fetch("https://findart-back.vercel.app/artists/mariage")
        .then((response) => response.json())
        .then((data) => {
          setMariage(data.artistsData);
        });
    } else if (route.params.name === "Evènement privés") {
      fetch("https://findart-back.vercel.app/artists/privy")
        .then((response) => response.json())
        .then((data) => {
          setPrivy(data.artistsData);
        });
    } else if (route.params.name === "Cours") {
      fetch("https://findart-back.vercel.app/artists/cours")
        .then((response) => response.json())
        .then((data) => {
          setCours(data.artistsData);
        });
    }
  }, []);

  const mariageEvent = mariage.map((data, i) => {
    return (
      <ArtistCard
        key={i}
        username={data.username}
        city={data.city}
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

  const privyEvent = privy.map((data, i) => {
    return (
      <ArtistCard
        key={i}
        username={data.username}
        city={data.address.city}
        type={data.type}
        rate={data.rate.hourly}
        dailyRate={data.rate.package}
        style={data.style}
        event={data.event}
        description={data.description}
        link={data.link}
      />
    );
  });

  const coursEvent = cours.map((data, i) => {
    return (
      <ArtistCard
        key={i}
        username={data.username}
        city={data.city}
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
        <Text style={styles.header}>Results</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {route.params.name === "Mariage" ? (
          mariageEvent
        ) : route.params.name === "Evènement privés" ? (
          privyEvent
        ) : route.params.name === "Cours" ? (
          coursEvent
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
