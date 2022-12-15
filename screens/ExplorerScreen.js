import { SafeAreaView, Text, StyleSheet, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import ArtistCard from '../components/ArtistCard';


export default function ExplorerScreen() {

  const [artistData, setArtistData] = useState([]);


  useEffect(() => {
    fetch('https://findart-back.vercel.app/artists')
    .then(response => response.json())
    .then(data => {
      console.log(data.artistsData);
      setArtistData(data.artistsData);
    });
    
  }, []);
  
  const artist = artistData.map((data, i) =>{
    return (
      <ArtistCard key={i} username={data.username} city={data.address.city} type={data.type} rate={data.rate.hourly} dailyRate={data.rate.package}  style={data.style} event={data.event.name} description={data.description} link={data.link}/>
    )

  }) 

  return (
    
    
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header} >Tous les artistes</Text>

      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {artist}

      </ScrollView>
        
    </SafeAreaView>
      
  )
}

const styles = StyleSheet.create ({

  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'flex-start',
    // backgroundColor: 'yellow',
},
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  scrollView: {
    // alignItems: 'flex-end',
    // padding: 50,
  },
  headerContainer: {
    backgroundColor: '#264653',
    padding: 30
  }
})