import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const OrderCompleted = () => {
    return (
        <View style={styles.container}>
            <Text>Tu orden al restaurante fue confirmada por un total de:</Text>
        </View>
    )
}

export default OrderCompleted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30
    },
})