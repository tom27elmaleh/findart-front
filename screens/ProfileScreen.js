import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ProfileButton from "../utils/ProfileButton";
import ProfileInput from "../utils/ProfileInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/artist";
import LoggedProfile from "../components/LoggedProfile";

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [showErrorLog, setShowErrorLog] = useState(false);
  const dispatch = useDispatch();

  const artist = useSelector((state) => state.artist.value);

  function setEmailFunc(value) {
    setEmail(value);
  }

  function setPasswordFunc(value) {
    setPassword(value);
  }

  const redirect = () => {
    navigation.navigate("Signup");
  };

  const loginPressed = () => {
    fetch("http://192.168.10.206:3000/artists/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setPassword("");
          setShowErrorLog(false);
          dispatch(
            login({
              token: data.token,
              username: data.username,
              type: data.type,
              id: data.id,
            })
          );
        } else {
          setShowErrorLog(true);
          if (data.error === "Missing or empty fields") {
            setErrorLog("Veuillez remplir tous les champs");
          } else if (data.error === "User not found or wrong password") {
            setErrorLog("Identifiants incorrectes");
          }
        }
      });
  };

  // SI PAS CONNECTER

  if (!artist.token) {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.logo}
            source={{ uri: `http://192.168.10.206:3000/assets/logo.png` }}
          />
          <Text style={styles.title}>Trouve ton artiste</Text>
          <View style={styles.inputs}>
            <ProfileInput
              text="Adresse mail"
              placeholder="abc@gmail.com"
              function={setEmailFunc}
              value={email}
              secureTextEntry={false}
            ></ProfileInput>
            <ProfileInput
              text="Mot de passe"
              placeholder="********"
              function={setPasswordFunc}
              value={password}
              secureTextEntry={true}
            ></ProfileInput>
            {showErrorLog && (
              <Text style={{ color: "red", paddingTop: 10 }}>{errorLog}</Text>
            )}
          </View>

          <View style={styles.buttons}>
            <ProfileButton
              text="Connexion"
              function={loginPressed}
            ></ProfileButton>
            <Text style={styles.signupButton}> Pas encore de compte ?</Text>
            <ProfileButton
              function={redirect}
              text="Inscription"
            ></ProfileButton>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }

  // SI CONNECTER

  // SI CONNECTER

  return <LoggedProfile />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: "30%",
    width: "60%",
    marginTop: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 25,
    marginTop: 20,
  },
  inputs: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },
  buttons: {
    marginTop: 20,
  },
  signupButton: {
    marginTop: 20,
    marginBottom: 5,
  },
});
