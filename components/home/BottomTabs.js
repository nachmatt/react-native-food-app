import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTabs = () => {
    return (
        <View style={styles.container}>
            <Icon icon='ios-home' text='Inicio'/>
            <Icon icon='ios-search' text='Buscar'/>
            <Icon icon='ios-gift' text='Tienda'/>
            <Icon icon='ios-reader' text='Ordenes'/>
            <Icon icon='ios-person' text='Cuenta'/>
        </View>
    )
}

export default BottomTabs

const Icon = ({icon, text}) => (
    <TouchableOpacity>
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
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10, 
        marginHorizontal: 30,
        justifyContent: 'space-between'
    }
})