import { NavigationProp, Route } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text, View } from "react-native";
import { Routes } from "../utils/Routes";


function DetailsScreen({ route, navigation } : any ) {

    const { text } = route.params;

    // Use naviation.setOptions to change state values

    return ( 
        <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Details Screen</Text> 
            <Text> Passed In Params : {JSON.stringify(text)}</Text>

            <Button
            title="Go To Details... Again --->"
            onPress={() => navigation.push(Routes.Details)}/>
            <Button
            title="Go Home --->"
            onPress={() => navigation.navigate(Routes.Home)}/>
              <Button
            title="Push Home --->"
            onPress={() => navigation.push(Routes.Home)}/>
            <Button
            title=" <-- Go Back"
            onPress={() => navigation.goBack()}/>
            <Button
            title=" <= First Item in stack"
            onPress={() => navigation.popToTop()}/>

            <Button
            title="SetParam Button"
            onPress={() => navigation.setParams({text: "Hello World Again"})}/>


        </View>
    )
}

export default DetailsScreen;