import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ArtistProfileRow from '../components/ArtistProfileRow'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ArtistProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Informations profil</Text>
            <Image style={styles.profilePicture} source={require('../assets/logo.png')}/>
        </View>
        <ArtistProfileRow title="Pseudo"></ArtistProfileRow>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 27,
    },
    profilePicture: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 20,
        marginBottom: 30,
    }
  });