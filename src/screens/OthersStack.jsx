import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import OthersScreen from "./OthersScreen"

const Stack = createNativeStackNavigator()
const Others = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OtherScreen" component={OthersScreen} />
        </Stack.Navigator>
    )
}

export default Others