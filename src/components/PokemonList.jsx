import { View, Image, ScrollView, RefreshControl, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { Card, IconButton, Text, List, Button } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { getList, setSort, setView } from "../redux/actions"
import { capitalize } from "../utils"
import { useNavigation } from "@react-navigation/native"

const PokemonList = () => {
    const { noOfResults, loading, pokemons, sortType, viewType } = useSelector(state => state.pokemon)
    const [currentPage, setCurrentPage] = React.useState(0)
    const loadMore = () => {
        setCurrentPage(currentPage + 1)
        const offset = (currentPage + 1) * noOfResults
        dispatch(getList(noOfResults, offset))
    }
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getList(noOfResults))
    }, [])
    const sorter = (first, second, sortType) => {
        if (sortType === 'ascending') return first.id - second.id
        return second.id - first.id
    }
    return (
        <View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <IconButton
                    icon={sortType === 'ascending' ? 'sort-descending' : 'sort-ascending'}
                    size={20}
                    onPress={() => dispatch(setSort())}
                />
                <IconButton
                    icon={viewType === 'grid' ? 'view-grid-outline' : 'view-list-outline'}
                    size={20}
                    onPress={() => dispatch(setView())}
                />
            </View>
            <FlatList
                contentInset={{ bottom: 800 }}
                data={pokemons.sort((a, b) => sorter(a, b, sortType))}
                numColumns={2}
                renderItem={({ item, index }) => (
                    viewType === 'grid' ? <PokemonCardView pokemon={item} key={index} /> : <PokemonListView pokemon={item} key={index} />
                )}
                onEndReached={loadMore}
            />
        </View>

    )
}
export const PokemonListView = ({ pokemon }) => {
    return (
        <View style={{ width: '100%' }}>
            <Card style={styles.card}>
                <List.Item
                    title={capitalize(pokemon.name)}
                    titleStyle={{ fontWeight: 700, color: '#fff', fontSize: 20 }}
                    left={() =>
                        <List.Image variant="image" source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png` }} />
                    } />
            </Card>
        </View>
    )
}
export const PokemonCardView = ({ pokemon }) => {
    const navigation = useNavigation()
    return (
        <View style={{ width: '50%' }}>
            <Card
                onPress={() => navigation.navigate('PokemonScreen', { pokemon })}
                style={styles.card}
            >
                <View>
                    <Text style={{ fontWeight: '700', color: '#fff' }}>{capitalize(pokemon.name)}</Text>
                    <Image
                        style={{ width: 100, height: 100, alignSelf: 'center' }}
                        source={{
                            uri:
                                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`
                        }}
                    />
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#67515A',
        padding: 10,
        margin: 5,
    }
})
export default PokemonList