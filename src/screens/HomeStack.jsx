import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./HomeScreen"
import PokemonScreen from "./PokemonScreen"

const Stack = createNativeStackNavigator()
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
        </Stack.Navigator>
    )
}



export default HomeStack