import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SearchWrapper from "../components/SearchWrapper"
import Search from "../components/Search"

const SearchScreen = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#292929', minHeight: '100%' }}>
            <SearchWrapper>
                <Search />
            </SearchWrapper>
        </SafeAreaView>
    )
}

export default SearchScreen