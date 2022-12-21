import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import Messages from "../components/Messages";
import { Electrolize_400Regular } from "@expo-google-fonts/dev";
import { useSelector } from "react-redux";
import HeaderGoBack from "../utils/HeaderGoBack";

export default function MessageScreen() {
  const [message, setMessage] = useState([]);

  const artist = useSelector((state) => state.artist.value);

  useEffect(() => {
    fetch("https://findart-back.vercel.app/requests/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_artist: artist.id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.messageData);
      });
  }, []);

  const messages = message.map((data, i) => {
    return (
      <Messages
        key={i}
        username={data.user.firstname}
        text={data.text}
        date="12/22/2022"
      />
    );
  });

  return (
    <>
      <HeaderGoBack name="Messages" />
      <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>{messages}</View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
