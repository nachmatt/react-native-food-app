import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'

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

const MenuItems = ({restaurantName}) => {
    const dispatch = useDispatch()
    //funcion que añade el item al store
    const selectItem = (item, isChecked) => 
        dispatch({
            type: 'ADD_TO_CART', 
            payload: {
                ...item, 
                restaurantName: restaurantName, 
                isChecked: isChecked
            }
        })
    
    const cartItems = useSelector(
            (state) => state.cartReducer.selectedItems.items
        )
    const isFoodInTheCart = (food, cartItems) => Boolean(cartItems.find((item => item.title === food.title)))

    return (
        <FlatList
        data={foods}
        renderItem={({item}) => (
            <>
                <View>
                    <View style={styles.menuItem}>
                        <BouncyCheckbox 
                            iconStyle={{borderColor:'salmon', borderRadius: 3}}
                            size={22.5}
                            onPress={(isChecked) => selectItem(item, isChecked)}
                            isChecked={isFoodInTheCart(item, cartItems)}
                        />
                        <FoodInfo food={item}/>
                        <FoodImage food={item}/>
                    </View>
                </View>
                <Divider 
                    width={0.5} 
                    orientation='vertical' 
                    style={{marginHorizontal: 20}}
                />
            </>
        )}
        keyExtractor={item => item.id}
        vertical
        showsVerticalScrollIndicator={false}
/>
    )
}

export default MenuItems

const FoodInfo = ({ food }) => (
    <View style={styles.container}>
        <Text style={styles.title}>{food.title} </Text>
        <Text style={styles.description}>{food.description}</Text>
        <Text>{food.price}</Text>
    </View>
)

const FoodImage = ({ food }) => (
    <View>
        <Image source={{uri: food.image}} style={styles.image}/>
    </View>
)

const styles = StyleSheet.create({
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingHorizontal: 15
    },
    container: {
        width: '60%',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    title: {
        fontSize: 19,
        fontWeight: '600'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5
    },
})