import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ProfileButton(props) {

  const handlePress = () => {
    props.function()
    };

  return (
        <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
          <Text style={styles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
  )
}



const styles = StyleSheet.create ({
    button: {
      borderRadius: 10,
      backgroundColor: '#2A9D8F',
      alignItems: 'center',
    },
    buttonText: {
      paddingHorizontal: 60,
      paddingVertical: 10,
      color: 'white',
      fontWeight: '600',
    }
  })
  