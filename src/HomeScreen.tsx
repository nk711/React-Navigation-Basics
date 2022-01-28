 import { NavigationContainer } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
 import React from 'react';
import { Button, Text, View } from 'react-native';
import { Routes } from '../utils/Routes';

 function HomeScreen({ route, navigation } : any) {
  
  const { message } = route.params;

   return (
      <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Text>{JSON.stringify(message)}</Text>
          <Button
            title="Go to details"
            onPress={() => { 
                navigation.navigate(Routes.Details,  { text: "Hello"}  );
            }}            
            />
            <Button
            title="Go to Form"
            onPress={() => { 
                navigation.navigate(Routes.Form);
            }}            
            />
          <Button
            title=" <-- Go Back"
            onPress={() => navigation.goBack()}/>
      </View>
   );
 };
 
 export default HomeScreen;