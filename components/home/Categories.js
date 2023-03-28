import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const items = [
    {
        image: <FontAwesome5 name='shopping-bag' size={35} color='#252422'/>,
        text: 'Pick-up'
    },
    {
        image: <FontAwesome5 name='wine-bottle' size={35} color='#252422'/>,
        text: 'Bebidas'
    },
    {
        image: <FontAwesome5 name='bread-slice' size={35} color='#252422'/>,
        text: 'Panadería'
    },
    {
        image: <Ionicons name='fast-food' size={35} color='#252422'/>,
        text: 'FastFood'
    },
    {
        image: <MaterialIcons name='emoji-food-beverage' size={35} color='#252422'/>,
        text: 'Café y Té'
    },
    {
        image: <Ionicons name='ice-cream' size={35} color='#252422'/>,
        text: 'Postres'
    }
]

const Categories = () => {
    return (
            <FlatList
                data={items}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        {item.image}
                        <Text style={styles.text}>
                            {item.text}
                        </Text>
                    </View>
                )}
                keyExtractor={item => item.text}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.list}
            />
    )
}

export default Categories

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ffffff', //ojo con ésto
        paddingBottom: 10,
        paddingHorizontal: 20,
    },
    container: {
        alignItems:'center',
        marginRight: 30,
    },
    text: {
        fontSize: 13,
        fontWeight: 'bold',
    },
})

/*
    
*/