import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Header(props) {
  return (
    <View style={styles.headerContainer}>
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
        alignItems: "center",
        justifyContent: "center",
    },
})