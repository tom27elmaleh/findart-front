import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ArtistProfileRow from '../components/ArtistProfileRow'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

export default function ArtistProfileScreen() {

    const [artist, setArtist] = useState(null)

    const currentArtist = useSelector((state) => state.artist.value)

    useEffect(() => {
        fetch(`http://192.168.1.17:3000/artists/${currentArtist.token}`)
        .then(response => response.json())
        .then(data => {
            if(data.result) {
                setArtist(data.artist)
            }
        })
    }, [])


if(artist){
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Informations profil</Text>
            <Image style={styles.profilePicture} source={{ uri: `http://192.168.1.17:3000/assets/logo.png` }}/>
        </View>
        <ScrollView>
            <Text style={styles.subtitle}> Informations personelles</Text>
            <ArtistProfileRow title="Pseudo" value={artist.username}></ArtistProfileRow>
            <ArtistProfileRow title="Adresse mail" value={artist.email} separation={true}></ArtistProfileRow>
            <Text style={styles.subtitle}> Adresse</Text>
            <ArtistProfileRow title="Pays" value={artist.address.country}></ArtistProfileRow>
            <ArtistProfileRow title="Ville" value={artist.address.city} ></ArtistProfileRow>
            <ArtistProfileRow title="Code Postal" value={artist.address.postalCode} separation={true}></ArtistProfileRow>
            <Text style={styles.subtitle}>Informations artiste</Text>
            <ArtistProfileRow title="Catégorie" value={artist.type}></ArtistProfileRow>
            <ArtistProfileRow title="Style" value={artist.style}></ArtistProfileRow>
            <ArtistProfileRow title="Description" value={artist.description}></ArtistProfileRow>
            <ArtistProfileRow title="Lien instagram" value={artist.insta}></ArtistProfileRow>
            <ArtistProfileRow title="Lien artiste" value={artist.link}></ArtistProfileRow>
            <ArtistProfileRow title="Prix horaire" value={`${artist.rate.hourly}€ / h`}></ArtistProfileRow>
            <ArtistProfileRow title="Forfait jour" value={`${artist.rate.package}€ / jour`}></ArtistProfileRow>
            { artist.instrument && <ArtistProfileRow title="Instrument" value={artist.instrument}></ArtistProfileRow>}
            { artist.formatPhoto && <ArtistProfileRow title="Format photo" value={artist.formatPhoto}></ArtistProfileRow>}
            { artist.camera && <ArtistProfileRow title="Format photo" value={artist.camera}></ArtistProfileRow>}
        </ScrollView>
    </SafeAreaView>
  )
 }  
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
    },
    subtitle: {
        fontSize: 20,
        padding: 10
    }
  });