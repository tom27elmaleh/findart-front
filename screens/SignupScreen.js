import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import SignupInput from "../utils/SignupInput";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import { Picker } from "@react-native-picker/picker";
import { useDispatch } from "react-redux";
import { login } from "../reducers/artist";
import HeaderGoBack from "../utils/HeaderGoBack";

export default function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [insta, setInsta] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [selectedType, setSelectedType] = useState("Musique");
  const [selectedEvent, setSelectedEvent] = useState("weddings");
  const [hourly, setHourly] = useState("");
  const [packageRate, setPackageRate] = useState("");
  const [formatPhoto, setFormatPhoto] = useState("");
  const [instrument, setInstrument] = useState("");
  const [styleArt, setStyleArt] = useState("");

  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  function setUsernameFunc(value) {
    setUsername(value);
  }

  function setEmailFunc(value) {
    setEmail(value);
  }

  function setCountryFunc(value) {
    setCountry(value);
  }

  function setPasswordFunc(value) {
    setPassword(value);
  }

  function setCityFunc(value) {
    setCity(value);
  }

  function setPostalCodeFunc(value) {
    setPostalCode(value);
  }

  function setDescriptionFunc(value) {
    setDescription(value);
  }

  function setInstaFunc(value) {
    setInsta(value);
  }

  function setInstrumentFunc(value) {
    setInstrument(value);
  }

  function setStyleArtFunc(value) {
    setStyleArt(value);
  }

  function setLinkFunc(value) {
    setLink(value);
  }

  function setHourlyFunc(value) {
    setHourly(value);
  }

  function setPackageRateFunc(value) {
    setPackageRate(value);
  }

  function setFormatPhotoFunc(value) {
    setFormatPhoto(value);
  }

  const onNextStep = () => {
    if (!isValid) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const submitForm = () => {
    fetch("http://192.168.10.206:3000/artists/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        country: country,
        city: city,
        postalCode: postalCode,
        description: description,
        insta: insta,
        link: link,
        type: selectedType,
        instrument: instrument,
        hourly: hourly,
        package: packageRate,
        formatPhoto: formatPhoto,
        link: link,
        style: styleArt,
        event: selectedEvent,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              token: data.token,
              username: data.username,
              type: data.type,
              id: data._id,
            })
          );
          navigation.navigate("TabNavigator");
        } else {
          console.log("result false");
        }
      });
  };

  let buttonTextStyle = {
    backgroundColor: "#2A9D8F",
    fontSize: 18,
    color: "white",
    padding: 10,
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <HeaderGoBack name="Inscription" />
      <SafeAreaView style={styles.container}>
        <ProgressSteps
          activeStepNumColor={"#2A9D8F"}
          completedStepNumColor={"#2A9D8F"}
          activeLabelColor={"#2A9D8F"}
          progressBarColor={"#2A9D8F"}
          completedProgressBarColor={"#2A9D8F"}
          activeStepIconBorderColor={"#2A9D8F"}
          completedStepIconColor={"#2A9D8F"}
          disabledStepIconColor={"#2A9D8F"}
        >
          {/* FIRST STEP  */}
          <ProgressStep
            nextBtnText={"Suivant"}
            label="Informations personnelles"
            onNext={() => onNextStep()}
            nextBtnTextStyle={buttonTextStyle}
            nextBtnDisabled={email && username && password ? false : true}
          >
            <View style={styles.inputs}>
              <SignupInput
                text="Adresse mail*"
                placeholder="abc@gmail.com"
                function={setEmailFunc}
                value={email}
              ></SignupInput>
              <SignupInput
                text="Pseudo*"
                placeholder="username"
                function={setUsernameFunc}
                value={username}
              ></SignupInput>
              <SignupInput
                text="Pays"
                placeholder="France"
                function={setCountryFunc}
                value={country}
              ></SignupInput>
              <SignupInput
                text="Ville"
                placeholder="Paris"
                function={setCityFunc}
                value={city}
              ></SignupInput>
              <SignupInput
                text="Code Postal"
                placeholder="75001"
                function={setPostalCodeFunc}
                value={postalCode}
              ></SignupInput>
              <SignupInput
                text="Mot de passe*"
                placeholder="********"
                function={setPasswordFunc}
                value={password}
              ></SignupInput>
            </View>
          </ProgressStep>

          {/* SECOND STEP  */}
          <ProgressStep
            nextBtnDisabled={description ? false : true}
            previousBtnText={"Précedent"}
            finishBtnText={"Valider"}
            label="Description"
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={styles.inputs}>
              {/* <SignupInput text="Photo de profil" placeholder="a changer en import file" function={setDescriptionFunc} value={description}></SignupInput> */}
              <SignupInput
                text="Instagram"
                placeholder="https://instagram.com"
                function={setInstaFunc}
                value={insta}
              ></SignupInput>
              <SignupInput
                text="Description*"
                placeholder="Ecrivez votre description"
                function={setDescriptionFunc}
                value={description}
              ></SignupInput>
              <SignupInput
                text="Lien"
                placeholder="spotify.fr"
                function={setLinkFunc}
                value={link}
              ></SignupInput>

              <View
                style={{
                  flexDirection: "row",
                  width: "85%",

                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 17 }}>Catégorie : </Text>
                <Picker
                  itemStyle={{ height: 130 }}
                  style={{ width: "45%" }}
                  selectedValue={selectedType}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedType(itemValue)
                  }
                >
                  <Picker.Item label="Musique" value="Musique" />
                  <Picker.Item label="Dance" value="Dance" />
                  <Picker.Item label="Photo" value="Photo" />
                  <Picker.Item label="Design" value="Design" />
                </Picker>
              </View>
            </View>
          </ProgressStep>

          {/* LAST STEP  */}
          <ProgressStep
            previousBtnText={"Précedent"}
            finishBtnText={"Valider"}
            label={"Catégorie"}
            onSubmit={() => submitForm()}
            nextBtnTextStyle={buttonTextStyle}
            previousBtnTextStyle={buttonTextStyle}
          >
            <View style={styles.inputs}>
              <SignupInput
                text="Style"
                placeholder="Jazz"
                function={setStyleArtFunc}
                value={styleArt}
              ></SignupInput>
              {selectedType === "Musique" && (
                <SignupInput
                  text="Instrument"
                  placeholder="Piano"
                  function={setInstrumentFunc}
                  value={instrument}
                ></SignupInput>
              )}
              {selectedType === "Photo" && (
                <SignupInput
                  text="Format de photo"
                  placeholder="Argentique"
                  function={setFormatPhotoFunc}
                  value={formatPhoto}
                ></SignupInput>
              )}
              <SignupInput
                isNum={true}
                text="Prix horaire € / h"
                placeholder="40"
                function={setHourlyFunc}
                value={hourly}
              ></SignupInput>
              <SignupInput
                text="Forfait € / jour"
                isNum={true}
                placeholder="A faire"
                function={setPackageRateFunc}
                value={packageRate}
              ></SignupInput>
              <View
                style={{
                  flexDirection: "row",
                  width: "85%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 17 }}>Catégorie : </Text>
                <Picker
                  selectedValue={selectedEvent}
                  itemStyle={{ height: 130 }}
                  style={{ width: "65%" }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedEvent(itemValue)
                  }
                >
                  <Picker.Item label="Mariage" value="weddings" />
                  <Picker.Item label="Cours" value="courses" />
                  <Picker.Item label="Evenement privés" value="privateEvents" />
                </Picker>
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
  },
});
