import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import { Routes } from '../utils/Routes';
import DetailsScreen from './Details';
import HomeScreen from './HomeScreen';
import FormScreen from './Form';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= { Routes.Home }>
        <Stack.Screen name = { Routes.Home } component = { HomeScreen } initialParams= {{ message: "This is just a default message"}} />
        <Stack.Screen name = { Routes.Details } component = { DetailsScreen } />
        <Stack.Screen name = { Routes.Form } component = { FormScreen } />

      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
