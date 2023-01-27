import { View, SafeAreaView, Image, ScrollView, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToFavorites, emptyFavorites, getPokeDesc, getPokemon, removeFromFavorites } from "../redux/actions"
import { Appbar, Avatar, Button, Card, Chip, DataTable, IconButton, List, ProgressBar, SegmentedButtons, Text } from "react-native-paper"
import { capitalize, isInArray } from "../utils"

const PokemonScreen = ({ route, navigation }) => {
    const { pokemon } = route.params

    const { selectedPokemon, favorites } = useSelector(state => state.pokemon)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPokemon(pokemon.name))
    }, [pokemon])
    const setFavorite = () => {
        if (Object.keys(selectedPokemon).length > 1) {
            dispatch(addToFavorites(selectedPokemon))
        }
    }
    const removeFavorite = () => {
        dispatch(removeFromFavorites(pokemon.id))
    }
    return (
        <SafeAreaView style={{ backgroundColor: '#292929', minHeight: '100%', flex: 1 }}>
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
            <Appbar style={{ backgroundColor: 'transparent' }}>
                <Appbar.BackAction onPress={() => navigation.goBack()} color="#fff" />
                <Appbar.Content />
                {isInArray(favorites, pokemon.name) ? (
                    <Appbar.Action
                        icon="star-minus-outline"
                        onPress={removeFavorite} color="#fff" />
                ) : (
                    <Appbar.Action
                        icon="star-plus-outline"
                        onPress={setFavorite} color="#fff" />
                )}


            </Appbar>
            <ScrollView style={{ paddingHorizontal: 20, marginBottom: 50 }}
                contentContainerStyle={{ paddingBottom: 50 }}>
                <PokemonHeader pokemon={selectedPokemon} name={pokemon.name} />
                <PokemonInfo pokemon={selectedPokemon} />
            </ScrollView>

        </SafeAreaView >
    )
}
const PokemonHeader = ({ pokemon, name }) => {
    return (
        <View>
            <View>
                <Text variant="headlineMedium" style={styles.name}>
                    {name}
                </Text>
            </View>
            <View style={styles.flex}>
                {pokemon.types?.map((type, i) => (
                    <Chip
                        mode="outlined"
                        key={i}
                        compact
                        style={styles.chip}
                        textStyle={styles.name}
                    >{type.type.name}</Chip>
                ))}
            </View>


            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png` }}
                style={styles.avatar} />
        </View>
    )
}
const PokemonInfo = ({ pokemon }) => {
    const [value, setValue] = React.useState('about');
    return (
        <View>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                    {
                        value: 'about',
                        label: 'About',
                        showSelectedCheck: true,
                        style: {
                            backgroundColor: '#67515A',
                        }
                    },
                    {
                        value: 'stats',
                        label: 'Stats',
                        showSelectedCheck: true,
                        style: {
                            backgroundColor: '#67515A',
                        }
                    },
                    {
                        value: 'moves',
                        label: 'Moves',
                        showSelectedCheck: true,
                        style: {
                            backgroundColor: '#67515A',
                        }
                    },

                ]}
                density="small"
            />
            {value === 'about' && <PokemonAbout pokemon={pokemon} />}
            {value === 'stats' && <PokemonStats pokemon={pokemon} />}
            {value === 'moves' && <PokemonMoves pokemon={pokemon} />}

        </View>
    )
}
const PokemonAbout = ({ pokemon }) => {
    const { selectedPokemon } = useSelector(state => state.pokemon)
    console.log(selectedPokemon.shape)
    return (
        <Card style={styles.about}>
            <AboutRow title="Species" data={selectedPokemon?.genera?.filter(a => a.language.name === 'en')[0].genus} />
            <AboutRow title="Height" data={`${selectedPokemon?.weight * 10} cm`} />
            <AboutRow title="Weight" data={`${selectedPokemon?.weight / 10} kg`} />
            <AboutRow title="Shape" data={selectedPokemon?.shape?.name} />
            <AboutRow title="Habitat" data={selectedPokemon?.habitat?.name} />
            <AboutRow title="Egg Group" data={selectedPokemon?.egg_groups?.map(group => group.name)[0]} />
            <AboutRow title="Abilities" data={selectedPokemon?.abilities?.map(ability => ability.ability.name).toString()} />

        </Card>
    )
}
const AboutRow = ({ title, data }) => {
    return (
        <DataTable.Row>
            <DataTable.Cell>
                <Text variant="labelLarge" style={styles.whiteText}>{title}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
                <Text variant="labelLarge" style={styles.whiteText}>{data}</Text>
            </DataTable.Cell>
        </DataTable.Row>
    )
}
const PokemonStats = ({ pokemon }) => {
    const { stats } = pokemon
    return (
        <Card style={styles.about}>
            {stats?.map((stat, index) => (
                <View key={index} style={{ paddingVertical: 5 }}>
                    <Text variant="labelLarge" style={{ ...styles.whiteText, ...styles.uppercase }}>{stat?.stat?.name} - {stat.base_stat}</Text>
                    <ProgressBar progress={stat?.base_stat / 100} style={{ borderRadius: 10 }} color="#FF5964" />
                </View>
            ))}
        </Card>
    )
}
const PokemonMoves = ({ pokemon }) => {
    const { moves } = pokemon
    return (
        <Card style={styles.about}>
            {moves?.map((move, index) => (
                <List.Item key={index} title={capitalize(move.move.name)} titleStyle={{ fontWeight: 700, color: '#fff' }} />
            ))}
        </Card>
    )
}

const styles = StyleSheet.create({
    avatar: {
        height: 300, width: 300, alignSelf: 'center'
    },
    chip: {
        borderRadius: 20, backgroundColor: '#67515A', marginHorizontal: 2
    },
    flex: {
        display: 'flex', flexDirection: 'row',
    },
    name: {
        fontWeight: 700,
        color: '#fff',
        textTransform: 'capitalize'
    },
    about: {
        backgroundColor: '#67515A',
        padding: 10,
        marginVertical: 10,
    },
    whiteText: {
        color: '#fff'
    },
    uppercase: {
        textTransform: 'uppercase'
    }
})
export default PokemonScreen