import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetail/About'
import MenuItems from '../components/restaurantDetail/MenuItems.js'
import ViewCart from '../components/restaurantDetail/ViewCart'
import BottomTabs from '../components/home/BottomTabs'

const foods = [
    {
        title: 'Lasaña',
        description: 'Con lechuga mantecosa, tomate y salsa bechamel',
        price: '$15.50',
        image: 'https://www.recetasdesbieta.com/wp-content/uploads/2018/10/lasagna-original..jpg',
        id: 1
    },
    {
        title: 'Pollo Tandoori',
        description: 'Un plato hindú increíble con tiras de pollo',
        price: '$16.10',
        image: 'https://www.recetasderechupete.com/wp-content/uploads/2021/06/Pollo-Tandoori-con-arroz-jazmin-y-pan-pita.jpg',
        id: 2
    },
    {
        title: 'Chilaquiles',
        description: 'Con queso y salsa, una comida mexicana deliciosa ',
        price: '$17.30',
        image: 'https://assets.unileversolutions.com/recipes-v2/206095.png',
        id: 3
    },
]

const RestaurantDetail = ({ route, navigation }) => {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginTop: 20, marginBottom: 10}}/>
            <MenuItems restaurantName={route.params.name} foods={foods}/>
            <ViewCart navigation={navigation} />
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({})