import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


const HeaderTabs = ({activeTab, setActiveTab}) => {

    return (
        <View style={styles.container}>
            <HeaderButton 
                text={'Delivery'} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                buttonColor='#252422' 
                textColor='#edede9'
            />
            <HeaderButton 
                text={'Pickup'} 
                activeTab={activeTab} 
                setActiveTab={setActiveTab} 
                textColor='ffffff'
            />
        </View>
    )
}

export default HeaderTabs

const HeaderButton = ({text, activeTab, setActiveTab}) => (
        <TouchableOpacity 
            style={{
                ...styles.buttonContainer, 
                backgroundColor: activeTab === text ? '#252422' : '#ffffff'
            }}
            onPress={() => setActiveTab(text)}
        >
            <Text style={{...styles.buttonText, color: activeTab === text ? '#ffffff' : '#252422'}}>{text}</Text>
        </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    buttonContainer: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 3.5,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})

