import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from "./SearchScreen"
import PokemonScreen from "./PokemonScreen"
const Stack = createNativeStackNavigator()

const SearchStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
        </Stack.Navigator>
    )
}

export default SearchStack