/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useTranslation } from 'react-i18next';
import RazorpayCheckout from 'react-native-razorpay';

const ProductDetails = ({ route, navigation }) => {
    const { item } = route.params;
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 12, backgroundColor: '#cbd28f' }}>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#fff' }}>{t('common:productdetails')}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="cross" size={25} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={{ width: '100%', height: 320, }}>
                <Image source={item.src} style={{ width: '100%', height: '100%' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#000', }}>{item.name}</Text>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#24963f', }}>{item.price}</Text>
            </View>

            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ color: '#000', fontSize: 15, fontWeight: '300', textTransform: 'capitalize' }}>
                    {item.detail}
                </Text>
            </View>

            <TouchableOpacity
                onPress={() => {
                    var options = {
                        description: 'Credits towards consultation',
                        image: 'https://i.imgur.com/3g7nmJC.png',
                        currency: 'INR',
                        key: 'rzp_test_1DP5mmOlF5G5ag', // Your api key
                        amount: '5000',
                        name: 'foo',
                        prefill: {
                            email: 'void@razorpay.com',
                            contact: '9191919191',
                            name: 'Razorpay Software',
                        },
                        theme: { color: '#F37254' },
                    };
                    RazorpayCheckout.open(options)
                        .then(data => {
                            // handle success
                            alert(`Success: ${data.razorpay_payment_id}`);
                        })
                        .catch(error => {
                            // handle failure
                            alert(`Error: ${error.code} | ${error.description}`);
                        });
                }}
                style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>{t('common:buynow')}</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loginBtn: {
        position: 'absolute',
        bottom: 0,
        marginVertical: 30,
        backgroundColor: '#4285f4',
        height: 50,
        borderRadius: 25,
        width: '70%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    loginBtnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
    },
});

export default ProductDetails;
