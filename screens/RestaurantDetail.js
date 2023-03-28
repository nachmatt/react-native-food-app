import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems.js'
import ViewCart from '../components/restaurantDetail/ViewCart'

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginTop: 20, marginBottom: 10}}/>
            <MenuItems restaurantName={route.params.name}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({})