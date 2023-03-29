import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const RestaurantItems = ({restaurantData, navigation}) => {
    return (
        <>
            {/* utilizo un .map() en éste caso en lugar de un Flatlist porque no se puede tener un Flatlist vertical dentro de un Scrollview vertical. */}
            {/* la alternativa sería tener un Flatlist dentro de otro Flatlist pero no puedo porque necesito que Categories sea scrolleable pero no se repita */}
            {/* posiblemente haya un workaround pero para el alcance de éste proyecto no me parece lo ideal perder tiempo en eso sino concentrarme en el resto.*/}
            {restaurantData.map((restaurant, index) => (
                <TouchableOpacity 
                    activeOpacity={.75} 
                    key={index} 
                    onPress={() => navigation.navigate('RestaurantDetail', {
                        //ésto es el route propeado a restaurant detail y luego a about
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}>
                    <View 
                        style={styles.container}
                    >
                        <RestaurantImage image_url={restaurant.image_url}/>
                        <RestaurantInfo name={restaurant.name} rating={restaurant.rating}/>
                    </View>
                </TouchableOpacity>
            ))}
        </>
    )
}

export default RestaurantItems

const RestaurantImage = ({image_url}) => (
    <View>
        <Image 
            source={image_url ? {uri: image_url} : null }
            style={styles.image}
        />
        <TouchableOpacity style={styles.iconContainer}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#ffffff'/>
        </TouchableOpacity>
    </View>
)

const RestaurantInfo = ({name, rating}) => (
    <View style={styles.textContainer}>
        <View>
            <Text style={styles.textTitle}>{name}</Text>
            <Text style={styles.textSubTitle}>30 - 45 min.</Text>
        </View>
        <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>{rating}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    touchable: {
        marginBottom: 30
    },
    container: {
        marginTop: 10,
        width: '95%',
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: 180,
        borderRadius: 6
    },
    iconContainer: {
        position: 'absolute',
        right: 15, 
        top: 10
    },
    textContainer: {
        width: '95%',
        alignSelf:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    textSubTitle: {
        fontSize: 15,
        color: 'grey'
    },
    ratingContainer: {
        backgroundColor: '#eeeeee',
        height: 35,
        width: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    ratingText: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})