import { View, Image } from 'react-native'
import React from 'react'
import { Text } from "react-native-paper"

const SearchWrapper = ({ children }) => {
    return (
        <View>
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    height: 200,
                    width: 200,
                    tintColor: '#F8F0FB',
                    opacity: 0.05
                }}
                source={require('../assets/logo.png')} />
            <View style={{ padding: 20 }}>
                <Text variant="headlineMedium" style={{ fontWeight: 700, color: '#fff' }}>
                    What Pokémon are you looking for?
                </Text>
                {children}
            </View>
        </View>
    )
}

export default SearchWrapper