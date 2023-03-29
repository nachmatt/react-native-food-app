import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useSelector } from 'react-redux'
import BottomTabs from '../components/home/BottomTabs'

const OrderCompleted = ({navigation}) => {

    const {items, restaurantName} = useSelector(
        (state) => state.cartReducer.selectedItems
        )
    
    const total = items
    .map((item => Number(item.price.replace('$', ''))))
    .reduce((previous, current) => previous + current, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })

    return (
        <View style={styles.container}>
            <LottieView  
                source={require('../assets/animations/check2.json')}
                autoPlay
                speed={0.5}
                style={{width: 100, height: 100}}
                loop={false}
            />
            <Text style={styles.text}>Tu orden al restaurante {restaurantName} fue confirmada por un total de: {totalUSD}</Text>
            <Text style={styles.textThanks}>Gracias por tu compra!</Text>
            <View >
                <BottomTabs navigation={navigation}/>
            </View>
        </View>
    )
}

export default OrderCompleted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30
    },
    text: {
        fontSize: 20,
        marginTop: 10,
        fontWeight: '600'
    },
    textThanks: {
        fontSize: 30,
        marginTop: 10,
        fontWeight: '400'
    },
})