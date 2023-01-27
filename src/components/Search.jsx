import { View, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Searchbar, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux";
import { getList, getPokemon, searchPokemon } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";
import SearchWrapper from "./SearchWrapper";
import { PokemonCardView, PokemonListView } from "./PokemonList";

const Search = () => {
    const { searchResults, viewType } = useSelector(state => state.pokemon)
    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => {
        if (query.length > 2) {
            dispatch(searchPokemon(query.toLowerCase()))
        }
        setSearchQuery(query)
    };
    const onSearch = () => {
        if (!searchQuery) return
        dispatch(searchPokemon(searchQuery.toLowerCase()))
    }
    return (
        <View>
            <Searchbar
                placeholder="Search Pokémon by Name"
                style={{ borderRadius: 50, backgroundColor: '#67515A', marginTop: 20 }}
                inputStyle={{ fontSize: 14, fontWeight: '600', color: '#fff' }}
                placeholderTextColor={"#292929"}
                iconColor="#292929"
                elevation={1}
                onChangeText={onChangeSearch}
                value={searchQuery}
                onIconPress={onSearch}
            />
            <View style={{ marginTop: 20 }}>
                <FlatList
                    contentInset={{ bottom: 800 }}
                    data={searchResults}
                    numColumns={2}
                    renderItem={({ item, index }) => (
                        viewType === 'grid' ? <PokemonCardView pokemon={item} key={index} /> : <PokemonListView pokemon={item} key={index} />
                    )}
                />
                {searchResults.length < 1 && (
                    <Card style={{ borderRadius: 10, backgroundColor: '#67515A', padding: 10 }}>
                        <Text style={{ fontWeight: 700, color: '#fff', fontSize: 23, textAlign: 'center' }}>We cannot find the Pokémon you are looking for. </Text>
                        <Text style={{ fontWeight: 700, color: '#fff', fontSize: 16, textAlign: 'center' }}>Maybe they have it.</Text>
                        <Image
                            style={{ height: 300, width: 320, marginTop: 20, alignSelf: 'center' }}
                            source={require('../assets/team-rocket.png')}
                        />
                    </Card>
                )}
            </View>
        </View>
    )
}

export default Search