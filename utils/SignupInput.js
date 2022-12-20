import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React from "react";

export default function SignupInput(props) {
  let keyboardType = props.isNum ? "numeric" : "default";

  function handleChange(value) {
    props.function(value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inputContent}>
        <Text style={styles.textInput}>{props.text}</Text>
        <TextInput
          keyboardType={keyboardType}
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
    width: "85%",
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 5,
    fontSize: 17,
  },
  input: {
    borderColor: "gray",
    borderWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 5,
  },
});
