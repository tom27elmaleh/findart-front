import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import HeaderGoBack from "../utils/HeaderGoBack";

export default function EventSelectedScreen({ route }) {
  const [mariage, setMariage] = useState([]);
  const [privy, setPrivy] = useState([]);
  const [cours, setCours] = useState([]);

  useEffect(() => {
    if (route.params.name === "Mariage") {
      fetch("http://192.168.10.206:3000/artists/mariage")
        .then((response) => response.json())
        .then((data) => {
          setMariage(data.artistsData);
        });
    } else if (route.params.name === "Evenement privé") {
      fetch("http://192.168.10.206:3000/artists/privy")
        .then((response) => response.json())
        .then((data) => {
          setPrivy(data.artistsData);
        });
    } else if (route.params.name === "Cours") {
      fetch("http://192.168.10.206:3000/artists/cours")
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
        city={data.address.city}
        type={data.type}
        rate={data.rate.hourly}
        dailyRate={data.rate.package}
        style={data.style}
        event={data.event.name}
        description={data.description}
        link={data.link}
        insta={data.insta}
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
        event={data.event.name}
        description={data.description}
        link={data.link}
        insta={data.insta}
      />
    );
  });

  const coursEvent = cours.map((data, i) => {
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
        insta={data.insta}
      />
    );
  });

  return (
    <>
      <HeaderGoBack name={route.params.name} />
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {route.params.name === "Mariage" ? (
            mariageEvent
          ) : route.params.name === "Evenement privé" ? (
            privyEvent
          ) : route.params.name === "Cours" ? (
            coursEvent
          ) : (
            <></>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
