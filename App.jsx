/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native'
import { IconButton, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux'
import axios from 'axios'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import configureStore from "./src/redux/store";
import HomeStack from "./src/screens/HomeStack";
import FavoritesStack from "./src/screens/FavoritesStack";
import OthersStack from "./src/screens/OthersStack";
import SearchStack from "./src/screens/SearchStack";

axios.defaults.baseURL = 'https://pokeapi.co/api/v2'

const store = configureStore()
const Tab = createBottomTabNavigator()
const tabs = [
  {
    name: 'HomeStack',
    component: HomeStack,
    icon: 'home',
  },
  {
    name: 'SearchStack',
    component: SearchStack,
    icon: 'magnify',
  },
  {
    name: 'FavoritesStack',
    component: FavoritesStack,
    icon: 'star',
  },
  {
    name: 'Settings',
    component: OthersStack,
    icon: 'dots-horizontal',
  },
]
function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIconStyle: {
              position: 'absolute',
              bottom: 20
            },
            tabBarStyle: {
              position: 'absolute',
              bottom: 30,
              left: 20,
              right: 20,
              elevation: 0,
              backgroundColor: '#171214',
              borderRadius: 10,
              height: 50,
              borderTopWidth: 0,
              ...styles.shadow
            }
          }} >
            {tabs.map((tab, index) => (
              <Tab.Screen key={index} name={tab.name} component={tab.component} options={{
                tabBarIcon: ({ focused }) => (
                  <IconButton icon={tab.icon} iconColor={focused ? '#F8F0FB' : '#67515A'} />
                )
              }} />
            ))}
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
export default App;
