import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Categorie from "../components/Categorie";
import CartEvent from "../components/CartEvent";
import Calendar from "react-native-vector-icons/Entypo";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function HomeScreen() {
  const [keyWord, setKeyWord] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageAndLogo}>
          <Image
            style={styles.logo}
            source={{ uri: `https://findart-back.vercel.app/assets/logo.png` }}
          />
          <View>
            <Text style={styles.title}>FindArt'</Text>
            <Text style={styles.subtitle}>Trouve ton artiste</Text>
          </View>
        </View>

        <View style={styles.inputContent}>
          <TextInput
            placeholder="Mot clé"
            style={styles.input}
            onChangeText={(value) => setKeyWord(value)}
            value={keyWord}
          />
          <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
            <MaterialIcon name="filter-variant" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      {showFilter && (
        <View style={styles.modalFilter}>
          <View style={styles.inputContentLoc}>
            <View style={styles.date}>
              <Calendar
                name="calendar"
                size={30}
                color="white"
                style={{ marginRight: 6 }}
              />
              <TextInput
                placeholder="12/12/23"
                style={styles.inputLoc}
                onChangeText={(value) => setKeyWord(value)}
                value={keyWord}
              />
            </View>
            <View style={styles.loc}>
              <MaterialIcon
                name="crosshairs-gps"
                size={30}
                color="white"
                style={{ marginRight: 6 }}
              />
              <TextInput
                placeholder="Paris"
                style={styles.inputLoc}
                onChangeText={(value) => setKeyWord(value)}
                value={keyWord}
              />
            </View>
          </View>
        </View>
      )}

      <Text style={styles.titleCarrousel}>Catégories</Text>
      <Categorie />
      <Text style={styles.titleCarrousel}>Evènements</Text>
      <CartEvent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    height: "25%",
    backgroundColor: "#264653",
    paddingTop: 50,
    // borderBottomEndRadius: 10,
    // borderBottomStartRadius: 10,
  },
  imageAndLogo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
  },
  logo: {
    height: 60,
    width: 60,
    marginRight: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
  titleCarrousel: {
    fontSize: 18,
    fontWeight: "500",
    paddingLeft: 14,
    marginTop: 20,
    marginBottom: 6,
  },
  inputContent: {
    paddingHorizontal: 60,
    paddingTop: 20,
    flexDirection: "row",
    textAlign: "flex-end",
  },
  input: {
    color: "#264653",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 5,
    width: "100%",
  },
  modalFilter: {
    flexDirection: "row",
    backgroundColor: "#264653a1",
    height: "10%",
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContentLoc: {
    paddingHorizontal: 60,
    flexDirection: "row",
    textAlign: "flex-end",
  },
  inputLoc: {
    color: "#264653",
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
    height: 30,
  },
  date: {
    flexDirection: "row",
    paddingRight: 20,
    textAlign: "center",
  },
  loc: {
    flexDirection: "row",
    textAlign: "center",
  },
});
