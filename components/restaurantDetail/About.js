import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = ({ route }) => {
    const {name, image, price, reviews, rating, categories} = route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(' • ')
    const description = `${formattedCategories} ${
        price ? ' • ' + price : ''
        } • 💳 • ${rating} 🌟 (${reviews}+)`

    return (
        <View>
            <RestaurantImage image={image}/>
            <RestaurantName name={name}/>
            <RestaurantDescription description={description}/>
        </View>
    )
}

export default About

const RestaurantImage = ({image}) => (
    <Image source={{uri: image}} style={styles.image}/>
)

const RestaurantName = ({name}) => (
    <Text style={styles.title}>{name}</Text>
)

const RestaurantDescription = ({description}) => (
    <Text style={styles.description}>{description}</Text>
)

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 190,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        marginBottom: 0
    },
    title: {
        fontSize: 25,
        fontWeight: '600',
        margin: 15,
    },
    description: {
        marginHorizontal: 15,
        fontWeight: '400',
        fontSize: 15.5
    }
})