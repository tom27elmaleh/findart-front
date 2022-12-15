import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import { Icon } from '@rneui/themed';


export default function ArtistProfileRow(props) {

  let marginSeparation = props.separation ? 20 : 0;

  return (
    <TouchableOpacity style={[styles.container, {marginBottom: marginSeparation}]} onPress={() => props.function()}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.value}>{props.value}</Text>
      </View>
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
        borderBottomColor: 'rgb(216, 214, 214)',
        borderBottomWidth: 1,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 19,
        color: 'gray',
        marginBottom: 7,
    },
    value: {
      fontSize: 19,
    }
  });
  