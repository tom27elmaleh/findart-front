import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { TextInput } from "react-native-gesture-handler";

export default function ArtistProfileRow(props) {
  let marginSeparation = props.separation ? 20 : 0;

  function handleChange(value) {
    props.function(value);
  }

  return (
    <View style={[styles.container, { marginBottom: marginSeparation }]}>
      <View style={{ maxWidth: "80%" }}>
        <Text style={styles.title}>{props.title}</Text>
        <TextInput
          keyboardType="default"
          returnKeyType="Valider"
          multiline={true}
          style={styles.value}
          value={props.value}
          editable={props.editable}
          onChangeText={(value) => handleChange(value)}
        />
      </View>
      {props.editable && <Icon name="edit" size={20} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomColor: "rgb(216, 214, 214)",
    borderBottomWidth: 1,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  title: {
    fontSize: 16,
    color: "gray",
    marginBottom: 7,
  },
  value: {
    fontSize: 16,
  },
});
