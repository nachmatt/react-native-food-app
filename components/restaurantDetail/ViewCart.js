import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import OrderItem from './OrderItem'

import { collection, addDoc} from "firebase/firestore";
import { db } from '../../firebase';

const ViewCart = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)

    const total = items
        .map((item => Number(item.price.replace('$', ''))))
        .reduce((previous, current) => previous + current, 0)
    
    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0, 0, 0, 0.7) '
        },
        currency: 'USD'
    })

    const addOrderToFirebase = async () => {
        const docRef = await addDoc(collection(db, "orders"), {
            items: items, 
            restaurantName: restaurantName,
            // createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
        setModalVisible(false)
        navigation.navigate('OrderCompleted')
    }


    const checkoutModalContent = () => {

        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.restaurantName}>{restaurantName}</Text>
                        </TouchableOpacity>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subTotalContainer}>
                            <Text style={styles.subTotalText}>Subtotal</Text>
                            <Text style={styles.subTotalText}>{totalUSD}</Text>
                        </View>
                        <View style={styles.checkoutButtonContainer}>
                            <TouchableOpacity style={styles.checkoutButton} onPress={() => {addOrderToFirebase()}}>
                                <Text style={styles.checkoutText}>Checkout</Text>
                                <Text style={styles.checkoutText}>{total ? totalUSD : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
        <Modal 
            animationType='slide' 
            visible={modalVisible} 
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
            {total ? (
                <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                            <Text style={styles.text}>View Cart</Text>
                            <Text style={styles.price}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
        </>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        zIndex: 999
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#121417',
        alignItems: 'center',
        padding: 13,
        borderRadius: 7,
        width: 300,
        position: 'relative',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    text: {
        color: '#ffffff',
        fontSize: 20
    },
    price: {
        color: '#80ed99',
        fontWeight: '600',
        fontSize: 18
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    modalCheckoutContainer: {
        backgroundColor: '#ffffff',
        padding: 16, 
        height: 500,
        borderWidth: 1
    },    
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },
    subTotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginTop: 15,
    },
    subTotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10
    },
    checkoutButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: '#121417',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 13,
        borderRadius: 6,
        width: 300,
        position: 'relative',
    },
    checkoutText: {
        color: '#ffffff',
        fontSize: 19,
    }
})

//npx expo install react-native-reanimated@~2.14.4