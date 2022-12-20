import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

export default function ProfileInput(props) {
  function handleChange(value) {
    props.function(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inputContent}>
        <Text style={styles.textInput}>{props.text}</Text>
        <TextInput
          placeholder={props.placeholder}
          style={styles.input}
          onChangeText={(value) => handleChange(value)}
          value={props.value}
        ></TextInput>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  inputContent: {
    width: "75%",
  },
  textInput: {
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 5,
  },
});
