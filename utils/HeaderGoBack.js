import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";

export default function HeaderGoBack(props) {
    const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          name="arrow-back"
          color="#ffffff"
          size={25}
          style={{ marginRight: 50 }}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.header}>{props.name}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
    headerContainer: {
        backgroundColor: "#264653",
        padding: 30,
        flexDirection: "row",
        marginBottom: 10,
        paddingTop : 60
    },
})