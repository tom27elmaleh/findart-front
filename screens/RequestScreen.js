import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import HeaderGoBack from "../utils/HeaderGoBack";

export default function RequestScreen({ route }) {
  const navigation = useNavigation();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState(new Date());
  const [displaymode, setMode] = useState("date");
  const [message, setMessage] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const submitRequest = () => {
    fetch("http://192.168.10.188:3000/requests/sendRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        lastname: lastname,
        firstname: firstname,
        email: email,
        street: street,
        postalCode: zipcode,
        city: city,
        date: date,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {});
    // console.log(data);
    setModalVisible(true);
  };

  const closeModal = () => {
    navigation.navigate("Home");
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <HeaderGoBack name="demande" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <Text style={styles.artistName}>
            Demande à :{" "}
            <Text style={{ color: "#2A9D8F" }}>{route.params.username}</Text>
          </Text>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                onChangeText={(value) => setStreet(value)}
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
              {/* MEP DATE PICKER  */}
              <Text>Date de l'évenement*</Text>
              <DateTimePicker
                value={date}
                mode={displaymode}
                is24Hour={true}
                display="default"
                onChange={() => setDate(date)}
              />

              <Text>Message*</Text>
              <TextInput
                multiline={true}
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
          {/* MODAL */}
          <Modal visible={modalVisible} animationType="fade" transparent>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>
                  Votre demande a bien été envoyée. Vous recevrez une réponse
                  par mail dans les 48h.
                </Text>
                <TouchableOpacity
                  onPress={() => closeModal()}
                  style={styles.btnBackHome}
                >
                  <Text style={{ color: "white" }}>Retour page d'accueil</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  artistName: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 20,
  },
  yourInfos: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 30,
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
    // width: 310,
    // height: 150,
    // marginTop: 6,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    fontSize: 16,
    borderColor: "#E4DFDF",
    marginBottom: 20,
    justifyContent: "flex-start",
    paddingBottom: 150,
    paddingTop: 10,
    flexWrap: "wrap",
    marginTop: 6,
    // maxWidth: 300
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  btnBackHome: {
    width: 200,
    height: 50,
    backgroundColor: "#264466",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 15,
  },
});
