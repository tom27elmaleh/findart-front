import {
  View,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  Image,
  StatusBar
} from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/artist";
import ProfileRow from "./ProfileRow";
import { useNavigation } from "@react-navigation/native";
import MessageScreen from "../screens/MessageScreen"
import FontAwesome from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";

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

  const redirectToMessage = ()=>{
    navigation.navigate("Messages");
  }


  return (
    <SafeAreaView style={styles.container}>
      <Header name="Profil"/>
      <View style={styles.header}>
        <View style={styles.infoUser}>
          <Image
            style={styles.profilePicture}
            source={{ uri: `http://192.168.10.138:3000/assets/logo.png` }}
          />
          <Text style={styles.username}>{artist.username}</Text>
        </View>
        <ScrollView  style={styles.Exit}>
        <FontAwesome name="exit-to-app" color= "#E76F51" size={40} onPress={() => logoutPressed()}/>
        </ScrollView>
      </View>
      <ProfileRow title="Informations profil" function={redirectToProfile} />
      <ProfileRow title="Réservations" function={() => console.log("resa")} />
      <ProfileRow title="Messages" function={redirectToMessage} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
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

  Exit:{
    position:"absolute",
    left:"87%",
  }
});
