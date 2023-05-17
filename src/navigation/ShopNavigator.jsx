import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import CategoryScreen from '../screens/CategoryScreen'
import CategoryBeardScreen from '../screens/CategoryBeardScreen'
import BreadDetailScreen from '../screens/BreadDetailScreen'

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name = "Home" component={CategoryScreen}/>
            <Stack.Screen name = "Bread" component={CategoryBeardScreen}/>
            <Stack.Screen name = "Detail"component={BreadDetailScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default ShopNavigator

const styles = StyleSheet.create({})