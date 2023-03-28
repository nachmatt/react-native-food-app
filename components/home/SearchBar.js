import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const GOOGLE_PLACES_API_KEY = 'AIzaSyBbLIB4eSNtTDSeZX_X4WQ0r53rchXkWT0'

const SearchBar = ({ cityHandler }) => {
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete 
                query={{key: GOOGLE_PLACES_API_KEY}}
                placeholder='Buscar'
                onPress={(data, details = null) => {
                    const city = data.description.split(',')[0]
                    cityHandler(city)
                }}
                styles={{
                    textInput: {
                        backgroundColor: '#eeeeee',
                        fontWeight: '600',
                        marginTop: 7,
                    },
                    textInputContainer: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#eeeeee',
                        borderRadius: 5
                    }
                }}
                renderLeftButton={() => (
                    <View style={styles.tagIconContainer}>
                        <Ionicons name='location-sharp' size={24} color='#252422'/>
                    </View>
                )}
                renderRightButton={() => (
                    <View style={styles.searchIconContainer}>
                        <AntDesign name='clockcircle' size={11} color='#252422' style={{marginRight: 6}}/>
                        <Text>Buscar</Text>
                    </View>
                )}
                />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flexDirection: 'row',
    },
    tagIconContainer: {
        marginLeft: 10
    },
    searchIconContainer: {
        backgroundColor: '#ffffff',
        marginRight: 8,
        flexDirection: 'row',
        alignItems:'center',
        borderRadius: 3,
        padding: 9,
    }
})