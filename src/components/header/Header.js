/* eslint-disable prettier/prettier */
//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Ionicons name="home-outline" size={22} color="#fff" />
                <Text style={styles.label}>Home</Text>
            </View>
            <TouchableOpacity>
                <Ionicons name="cart-outline" size={25} color="#fff" />
                {/* <AntDesign name="logout" size={25} color="#fff" /> */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#cbd28f',
    },
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    label: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 8,
    },
});

export default Header;
