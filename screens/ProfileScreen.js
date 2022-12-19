import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import ProfileButton from "../utils/ProfileButton";
import ProfileInput from "../utils/ProfileInput";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/artist";

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    fetch("http://192.168.1.14:3000/artists/signin", {
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
          dispatch(
            login({
              token: data.token,
              username: data.username,
              type: data.type,
            })
          );
        } else {
          console.log("wrong id");
        }
      });
  };

  function logoutPressed() {
    dispatch(logout());
  }

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
            source={{ uri: `http://192.168.1.14:3000/assets/logo.png` }}
          />
          <Text style={styles.title}>Trouve ton artiste</Text>
          <View style={styles.inputs}>
            <ProfileInput
              text="Adresse mail"
              placeholder="abc@gmail.com"
              function={setEmailFunc}
              value={email}
            ></ProfileInput>
            <ProfileInput
              text="Mot de passe"
              placeholder="********"
              function={setPasswordFunc}
              value={password}
            ></ProfileInput>
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

  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello {artist.username}</Text>
      <Button title="Deconnexion" onPress={() => logoutPressed()}></Button>
    </SafeAreaView>
  );
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
