import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

export default function ArtistByEventScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        {/* header  */}
        <View style={styles.headerContainer}>
        {/* bouton goback */}
          <MaterialCommunityIcons name="arrow-back" color='#ffffff' size={25} style={{marginRight: 100}} onPress={() => navigation.goBack()}/>
          <Text style={styles.header}>Results</Text>

      </View>
      <Text>EventScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({

  container: {
    flex: 1,
},
  header: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    
  },
  headerContainer: {
    backgroundColor: '#264653',
    padding: 30,
    flexDirection: 'row',
    
    
  }
})