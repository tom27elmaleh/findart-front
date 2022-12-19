import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function RequestScreen({ route }) {
  const navigation = useNavigation();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const submitRequest = () => {
    fetch("https://findart-back.vercel.app/requests/sendRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastname: lastname,
        firstname: firstname,
        email: email,
        zipcode: zipcode,
        city: city,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.artistName}>Demande à : {route.params.username}</Text>
      <View style={styles.infoFilter}></View>
      <ScrollView>
        <Text style={styles.yourInfos}>Vos informations</Text>
        <View>
          <Text>Nom*</Text>
          <TextInput
            onChangeText={(value) => setLastname(value)}
            value={lastname}
            style={styles.input}
            placeholder="Votre nom"
          />

          <Text>Prénom*</Text>
          <TextInput
            onChangeText={(value) => setFirstname(value)}
            value={firstname}
            style={styles.input}
            placeholder="Votre prénom"
          />

          <Text>Email*</Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={styles.input}
            placeholder="Votre email"
          />

          <Text>Adresse</Text>
          <TextInput
            style={styles.input}
            placeholder="L'adresse de votre évenement"
          />

          <Text>Code Postal*</Text>
          <TextInput
            onChangeText={(value) => setZipcode(value)}
            value={zipcode}
            style={styles.input}
            placeholder="Votre code postal"
          />

          <Text>Ville*</Text>
          <TextInput
            onChangeText={(value) => setCity(value)}
            value={city}
            style={styles.input}
            placeholder="Votre ville"
          />

          <Text>Message*</Text>
          <TextInput
            onChangeText={(value) => setMessage(value)}
            value={message}
            style={styles.inputMessage}
            placeholder="Indiquez le lieu, le type d'évenement..."
          />
        </View>
      </ScrollView>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.btnRequest}
          onPress={() => submitRequest()}
        >
          <Text style={styles.textBtnRequest}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 70,
    marginLeft: 30,
    marginRight: 30,
  },
  artistName: {
    fontSize: 25,
    fontWeight: "bold",
  },
  infoFilter: {
    height: "30%",
    width: "100%",
    backgroundColor: "beige",
  },
  yourInfos: {
    fontSize: 25,
    fontWeight: "bold",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    width: 310,
    height: 50,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    borderColor: "#E4DFDF",
    marginBottom: 20,
  },
  inputMessage: {
    width: 310,
    height: 150,
    marginTop: 6,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    borderColor: "#E4DFDF",
    marginBottom: 20,
  },
  scrollView: {
    paddingBottom: 1,
  },
  textBtnRequest: {
    color: "#ffffff",
    fontSize: 20,
  },
  btnRequest: {
    backgroundColor: "#2A9D8F",
    width: "60%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonArea: {
    width: "100%",
    height: 90,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
