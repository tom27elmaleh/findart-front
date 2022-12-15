import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';


export default function ArtistProfileRow(props) {
  return (
    
    <TouchableOpacity style={styles.container} onPress={() => props.function()}>
        <Text style={styles.title}>{props.title}</Text>
        <Icon name='arrow-right' />
    </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingBottom: 30,
        marginTop: 30,
    },
    title: {
        fontSize: 23,
    },
  });
  