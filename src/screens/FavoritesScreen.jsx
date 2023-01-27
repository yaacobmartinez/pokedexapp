import { View, SafeAreaView, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { Text } from "react-native-paper"
import { useSelector } from "react-redux"
import { PokemonCardView, PokemonListView } from "../components/PokemonList"

const FavoritesScreen = () => {
    const { favorites } = useSelector(state => state.pokemon)
    return (
        <SafeAreaView style={{ backgroundColor: '#292929', minHeight: '100%' }}>
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
            <View style={{ paddingHorizontal: 20 }}>
                <Text variant="headlineMedium" style={styles.name}>Favorites</Text>
                <FlatList
                    contentInset={{ bottom: 800 }}
                    data={favorites}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        <PokemonCardView pokemon={item} key={index} />
                    )}
                />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    name: {
        fontWeight: 700,
        color: '#fff',
        textTransform: 'capitalize'
    }
})
export default FavoritesScreen