import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems from '../components/home/RestaurantItems'
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs'

// const CLIENT_ID = 'UxQBXvIucwYrCE_5GHZhKw';
const YELP_API_KEY = 'wte0unfzd8GqGhPz4Pkcqcv9t60qQYev1oOx7v3FQD_hO5qUp5rwXdziz_Zl0vwW4gJi0cNz8PyqyvWsA9p3R_AIowAClwieFmWVuk_qy6x6EIo_anc24guGKhIiZHYx';

const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState([])
    const [city, setCity] = useState('San Diego')
    const [activeTab, setActiveTab] = useState('Delivery')

    const getRestaurantsFromYelp = () => {
        const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
        
        const apiConfig = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        }
        return fetch(url, apiConfig)
                .then((res) => res.json())
                .then((json) => 
                    setRestaurantData(
                        json.businesses.filter((business) => 
                            business.transactions.includes(activeTab.toLowerCase())
                        )              
                )
            );
        
    }
    
    useEffect(() => {
        getRestaurantsFromYelp()
    }, [city, activeTab])
    

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <SearchBar cityHandler={setCity}/>
            </View>
            <ScrollView vertical showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs navigation={navigation}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#eeeeee'
    },
    headerContainer: {
        backgroundColor: '#ffffff',
        padding: 15
    }
})