import { SafeAreaView } from 'react-native'
import React from 'react'
import SearchWrapper from "../components/SearchWrapper"
import { Searchbar } from "react-native-paper"
import PokemonList from "../components/PokemonList"

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#292929', minHeight: '100%' }}>
            <SearchWrapper>
                <Searchbar
                    placeholder="Search Pokémon by Name"
                    style={{ borderRadius: 50, backgroundColor: '#67515A', marginTop: 20 }}
                    inputStyle={{ fontSize: 14, fontWeight: '600' }}
                    placeholderTextColor={"#292929"}
                    iconColor="#292929"
                    elevation={1}
                    onPressIn={() => navigation.navigate('SearchStack')}
                />
                <PokemonList />
            </SearchWrapper>
        </SafeAreaView>
    )
}

export default HomeScreen