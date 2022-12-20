import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import ArtistCard from "../components/ArtistCard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

export default function ArtistCategoryScreen({ route }) {
  const navigation = useNavigation();

  const [musicData, setMusicData] = useState([]);
  const [danseData, setDanseData] = useState([]);
  const [designData, setDesignData] = useState([]);
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    if (route.params.type === "Musique") {
      fetch("http://192.168.10.188:3000/artists/music")
        .then((response) => response.json())
        .then((data) => {
          setMusicData(data.musiciansData);
        });
    } else if (route.params.type === "Danse") {
      fetch("http://192.168.10.188:3000/artists/danse")
        .then((response) => response.json())
        .then((data) => {
          setDanseData(data.dancersData);
        });
    } else if (route.params.type === "Design") {
      fetch("http://192.168.10.188:3000/artists/design")
        .then((response) => response.json())
        .then((data) => {
          setDesignData(data.designersData);
        });
    } else if (route.params.type === "Photo") {
      fetch("http://192.168.10.188:3000/artists/photo")
        .then((response) => response.json())
        .then((data) => {
          setPhotoData(data.photographsData);
        });
    }
  }, []);

  const musicians = musicData.map((data, i) => {
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
        instrument={data.instrument}
      />
    );
  });

  const dancers = danseData.map((data, j) => {
    return (
      <ArtistCard
        key={j}
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

  const designers = designData.map((data, k) => {
    return (
      <ArtistCard
        key={k}
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

  const photographs = photoData.map((data, i) => {
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
      {/* header  */}
      <View style={styles.headerContainer}>
        {/* bouton goback */}
        <MaterialCommunityIcons
          name="arrow-back"
          color="#ffffff"
          size={25}
          style={{ marginRight: 100 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>Results</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {route.params.type === "Danse" ? (
          dancers
        ) : route.params.type === "Musique" ? (
          musicians
        ) : route.params.type === "Photo" ? (
          photographs
        ) : route.params.type === "Design" ? (
          designers
        ) : (
          <></>
        )}
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
