import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from "react-redux"
import { PokemonCard } from "../components/PokemonList"
import { Appbar } from "react-native-paper"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import FavoritesScreen from "./FavoritesScreen"
import PokemonScreen from "./PokemonScreen"
const Stack = createNativeStackNavigator()

const FavoriteStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    )
}
export default FavoriteStack