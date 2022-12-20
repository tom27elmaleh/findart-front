import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/artist";
import ProfileRow from "./ProfileRow";
import { useNavigation } from "@react-navigation/native";

export default function LoggedProfile() {
  const dispatch = useDispatch();
  const artist = useSelector((state) => state.artist.value);

  const navigation = useNavigation();

  function logoutPressed() {
    dispatch(logout());
  }

  const redirectToProfile = () => {
    navigation.navigate("ArtistProfile");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.infoUser}>
          <Image
            style={styles.profilePicture}
            source={{ uri: `http://192.168.10.188:3000/assets/logo.png` }}
          />
          <Text style={styles.username}>{artist.username}</Text>
        </View>
        <Button title="Deconnexion" onPress={() => logoutPressed()}></Button>
      </View>
      <ProfileRow title="Informations profil" function={redirectToProfile} />
      <ProfileRow title="Réservations" function={() => console.log("resa")} />
      <ProfileRow title="Messages" function={() => console.log("message")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  username: {
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
  },
  profilePicture: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  infoUser: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 30,
  },
});
