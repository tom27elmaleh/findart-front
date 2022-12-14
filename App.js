import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExplorerScreen from './screens/ExplorerScreen';
import ArtistDetailsScreen from './screens/ArtistDetailsScreen';
// import ArtistCard from './components/ArtistCard';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import artist from './reducers/artist';

const store = configureStore({
  reducer: { artist },
 });

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
 return (
   <Tab.Navigator screenOptions={{ headerShown: false }}>
     <Tab.Screen name="Home" component={HomeScreen} /> 
     <Tab.Screen name="Explorer" component={ExplorerScreen} />
     <Tab.Screen name="Profile" component={ProfileScreen} />
   </Tab.Navigator>
 );
}

export default function App() {
 return (
  <Provider store={store}>
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="TabNavigator" component={TabNavigator} />
       <Stack.Screen name="ArtistDetails" component={ArtistDetailsScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
  </Provider>
 );
}