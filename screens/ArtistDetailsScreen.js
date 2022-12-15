import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/MaterialIcons';
import Tags from '../utils/Tags';
import { useState } from 'react';

export default function ArtistDetails({route}) {
// Etat mis en place pour passer de la description aux médias
    const [infos, setInfos] = useState('description');

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.profilePic}>
        <Image source={{ uri: `https://findart-back.vercel.app/assets/magicien.jpg`}} style={styles.iconArtist}/>     
            <Text style={styles.name}>{route.params.username}</Text>
        </View>
        <View style={styles.typeCity}>
            <View style={styles.typeContainer}>
                <Text style={styles.type}>{route.params.type}</Text>
            </View>
            <View style={styles.cityContainer}>
                <FontAwesome name='location-pin' color='#00B6AA' size={25}/>
                <Text style={styles.city}>{route.params.city}</Text>
            </View>
        </View>
        {/* NavTab description & links */}
        <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => setInfos('description')} >
                <Text style={styles.btnNav}>Bio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setInfos('link')} >
                <Text style={styles.btnNav}  >Médias</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.navContent}>
            <Text>
                {infos === 'description' ? route.params.description : route.params.link}
            </Text>
        </View>
        {/* DIVIDER : code à revoir */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{width: 50, textAlign: 'center'}}></Text>
            <View style={{flex: 1, height: 2, backgroundColor: 'black'}} />
            <View>
            <Text style={{width: 50, textAlign: 'center'}}></Text>
            </View>
        </View>

        <ScrollView style={styles.infosContainer}>
            <View style={styles.infos}>
                <Text style={styles.infosTitle}>Evenement</Text>
                <Tags tagName={route.params.event}/>
            </View>
            <View style={styles.infos}>
                <Text style={styles.infosTitle}>Style</Text>
                <Tags tagName={route.params.style}/>
            </View>
            <View style={styles.infos}>
                <Text style={styles.infosTitle}>Tarif</Text>
                <Text style={styles.infosPrice}>tarif horaire: {route.params.rate}€</Text>
                <Text style={styles.infosPrice}>Forfait journée : {route.params.dailyRate}€</Text>
            </View>
            <View style={styles.buttonArea}>

            </View>
        </ScrollView>


    

    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profilePic:{
        alignItems: 'center'
    },
    iconArtist: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15
    },
    name: {
        fontSize: 30,
    },
    typeCity: {
        flexDirection: 'row',
        marginTop: 20,
    },
    cityContainer: {
        flexDirection: 'row',
        width: '40%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 30
    },
    typeContainer: {
        alignItems: 'flex-start',
        width: '40%',
        marginLeft: 30
    },
    type: {
        fontSize: 20,
    },
    city: {
        fontSize: 20,
    },
    navContainer: {
        backgroundColor: 'beige',
        width: '90%',
        height: '5%',
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, 
    btnNav: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    navContent: {
        marginLeft: 30,
        marginBottom: 10
    },
    infos: {
        margin: 20
    }, 
    infosTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    buttonArea: {
        width: "80%",
        height: 30,
        backgroundColor: 'beige',
    },
    infosPrice: {
        fontSize: 18,
    }

})