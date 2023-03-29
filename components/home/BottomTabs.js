import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTabs = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Icon icon='ios-home' text='Inicio' nav='Home'/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OrderCompleted')}>
                <Icon icon='ios-gift' text='Ordenes' nav='OrderCompleted'/>
            </TouchableOpacity>
        </View>
    )
}

export default BottomTabs

const Icon = ({icon, text}) => (
        <View>
            <Ionicons 
                name={icon} 
                size={25} 
                color='#252422' 
                style={{
                    marginBottom: 3, 
                    alignSelf: 'center'
                }}
            />
            <Text>{text}</Text>
        </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10, 
        marginHorizontal: 30,
        justifyContent: 'space-evenly'
    }
})