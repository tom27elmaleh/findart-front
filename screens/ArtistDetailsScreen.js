import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/MaterialIcons";
import Tags from "../utils/Tags";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";
import Instagram from "react-native-vector-icons/MaterialCommunityIcons";

export default function ArtistDetails({ route }) {
  const navigation = useNavigation();
  // Etat mis en place pour passer de la description aux médias
  const [infos, setInfos] = useState("description");
  const [infoIsPress, setInfoIsPress] = useState(true);
  const [medias, setMedias] = useState(false);
  const handleBio = () => {
    setInfos("description");
    setInfoIsPress(true);
    setMedias(false);
  };

  const handleInfos = () => {
    setInfos("link");
    setInfoIsPress(false);
    setMedias(true);
  };
  var touchProps = {
    activeOpacity: 1,
    style: infoIsPress ? styles.btnPress : styles.btnNav1,
  };

  var touchProps1 = {
    activeOpacity: 1,
    style: medias ? styles.btnPress : styles.btnNav1,
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="arrow-back"
          color="black"
          size={35}
          style={{ top: 20, left: 30 }}
        />
      </TouchableOpacity>
      <View style={styles.profilePic}>
        <Image
          source={{
            uri: `http://192.168.10.206:3000/assets/magicien.jpg`,
          }}
          style={styles.iconArtist}
        />
        <Text style={styles.name}>{route.params.username}</Text>
      </View>
      <View style={styles.typeCity}>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>{route.params.type}</Text>
        </View>
        <View style={styles.cityContainer}>
          <FontAwesome name="location-pin" color="#00B6AA" size={25} />
          <Text style={styles.city}>{route.params.city}</Text>
        </View>
      </View>
      {/* NavTab description & links */}
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => handleBio()} {...touchProps}>
          <Text style={styles.btnNav1}>Bio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleInfos()} {...touchProps1}>
          <Text style={styles.btnNav2}>Médias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navContent}>
        <Text style={styles.textBioMedia}>
          {infos === "description"
            ? route.params.description
            : route.params.link}
        </Text>
      </View>
      {/* DIVIDER : code à revoir */}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ width: 50, textAlign: "center" }}></Text>
        <View style={{ flex: 1, height: 2, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}></Text>
        </View>
      </View>

      <ScrollView style={styles.infosContainer}>
        <View style={styles.infos}>
          <Text style={styles.infosTitle}>Evenement</Text>

          <Tags tagName={route.params.event} />
        </View>
        <View style={styles.infos}>
          <Text style={styles.infosTitle}>Style</Text>
          <Tags tagName={route.params.style} />
        </View>
        <View style={styles.infos}>
          <Text style={styles.infosTitle}>Tarif</Text>
          <Text style={styles.infosPrice}>
            Tarif horaire: {route.params.rate}€
          </Text>
          <Text style={styles.infosPrice}>
            Forfait journée : {route.params.dailyRate}€
          </Text>
          <View style={styles.infos}></View>
          <Text style={styles.infosTitle}>Instagram</Text>
          <Text style={styles.iconInsta}>
            <Instagram name="instagram" size={20} />
            {route.params.insta}
          </Text>
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.btnRequest}
          onPress={() =>
            navigation.navigate("Request", {
              token: route.params.token,
              username: route.params.username,
            })
          }
        >
          <Text style={styles.textBtnRequest}>Faire une demande</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  profilePic: {
    alignItems: "center",
  },
  iconArtist: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 30,
  },
  typeCity: {
    flexDirection: "row",
    marginTop: 20,
  },
  cityContainer: {
    flexDirection: "row",
    width: "40%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginRight: 30,
  },
  typeContainer: {
    alignItems: "flex-start",
    width: "40%",
    marginLeft: 30,
  },
  type: {
    fontSize: 20,
  },
  city: {
    fontSize: 20,
  },
  navContainer: {
    width: "90%",
    height: "5%",
    marginTop: 50,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnNav1: {
    fontSize: 28,
    fontWeight: "semi-bold",
  },
  btnNav2: {
    fontSize: 28,
    fontWeight: "semi-bold",
  },

  btnPress: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  navContent: {
    marginLeft: 30,
    marginBottom: 10,
  },
  infos: {
    margin: 20,
  },
  infosTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },

  buttonArea: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: 'beige',
  },
  infosPrice: {
    fontSize: 18,
  },
  btnRequest: {
    backgroundColor: "#2A9D8F",
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  textBtnRequest: {
    color: "#ffffff",
    fontSize: 20,
  },
  textBioMedia: {
    marginRight: 30,
  },
});
