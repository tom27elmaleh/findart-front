import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import Categorie from "../components/Categorie";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Categorie />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
