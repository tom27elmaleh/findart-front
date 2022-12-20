import { SafeAreaView, Text, StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/MaterialIcons";



export default function Messages(props) {


  return (
    
    <View style={styles.container}>
      <View style={styles.Messagecontainer1}>
        <Text style={styles.name}>{props.username} </Text>

        <Text style={styles.text}>{props.text}</Text>

      </View>
      <View style={styles.ContainerArrow}>
        <Text style={styles.date}>{props.date}</Text>
        <FontAwesome style={styles.arrow} name="keyboard-arrow-right" color="#2A9D8F" size={35} />
      </View>
    </View>
    
  )
}



const styles = StyleSheet.create({

container:{
borderTopColor: "black",
borderTopWidth:0.5,
width:"100%",
height: 150,
justifyContent:"space-around",
paddingTop:"3%",
flexDirection:"row",
},

Messagecontainer1:{
justifyContent:'flex-start',
position:"relative",
width:"80%",
alignItems:"flex-start",
marginLeft:10,

},

ContainerArrow:{

flexDirection:"column",
alignItems:"center",
justifyContent:'space-evenly',
position:"relative",
bottom:20,
right:4,

},




name:{
  fontWeight:"800",
  marginBottom:"10%",
},
// text:{
//   marginLeft: "4%",
//   marginRight:"10%"
// },

date:{
  fontSize:10,
},




 
})