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
// import ArtistCard from './components/ArtistCard';
import ArtistByEventScreen from './screens/ArtistByEventScreen';

import SignupScreen from './screens/SignupScreen';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from "@react-native-async-storage/async-storage";

import artist from './reducers/artist';

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