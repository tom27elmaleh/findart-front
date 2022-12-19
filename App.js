import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ExplorerScreen from './screens/ExplorerScreen';
import ArtistDetailsScreen from './screens/ArtistDetailsScreen';
import ArtistCategoryScreen from './screens/ArtistCategoryScreen';
import ArtistByEventScreen from './screens/ArtistByEventScreen';
import RequestScreen from './screens/RequestScreen';

import SignupScreen from './screens/SignupScreen';
// import HomeScreen from './screens/HomeScreen';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import artist from './reducers/artist';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const reducers = combineReducers({ artist });

const persistConfig = { key: "findart", storage: AsyncStorage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

const persistor = persistStore(store)

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
 return (
   <Tab.Navigator screenOptions={({route}) => ({
    tabBarIcon: ({color, size}) => {
      let iconName = '';
      if(route.name === "Home"){
        iconName = 'home';
      }else if(route.name === "Explorer"){
        iconName = 'compass'
      }else if(route.name === "Profil"){
        iconName = 'account-circle'
      }
      return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
    },
    tabBarActiveTintColor: '#ffffff',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
    tabBarStyle: {backgroundColor: '#264653', height: 100, borderTopEndRadius: 30, borderTopStartRadius: 30}

   })}>
     <Tab.Screen name="Home" component={HomeScreen} /> 
     <Tab.Screen name="Explorer" component={ExplorerScreen} />
     <Tab.Screen name="Profil" component={ProfileScreen} />
   </Tab.Navigator>
 );
}

export default function App() {
 return (
  
<Provider store={store}>
 <PersistGate persistor={persistor}>
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="TabNavigator" component={TabNavigator} />
       <Stack.Screen name="ArtistDetails" component={ArtistDetailsScreen}/>
       <Stack.Screen name="ArtistCategory" component={ArtistCategoryScreen}/>
       <Stack.Screen name="Signup" component={SignupScreen} />
       <Stack.Screen name="Event" component={ArtistByEventScreen} />
     </Stack.Navigator>
   </NavigationContainer>
   </PersistGate>
  </Provider>
 );
}