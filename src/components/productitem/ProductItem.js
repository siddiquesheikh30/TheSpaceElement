/* eslint-disable prettier/prettier */

import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ProductItem = (Props) => {
    const { renderItem, navigation } = Props;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product-detail', { item: renderItem })} style={styles.listItem}>
            <View style={styles.block}>
                <Image source={renderItem.src} style={styles.img} resizeMode="cover" />
            </View>
            <Text style={styles.name}>{renderItem.name}</Text>
            <Text style={styles.rate}>{renderItem.price}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        alignItems: 'center',
        padding: 8,
        width: '100%',
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    block: {
        padding: 4,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 100,
        height: 100,
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        marginBottom: 5,
    },
    rate: {
        fontSize: 16,
        fontWeight: '700',
        color: '#24963f',
    },
});

export default ProductItem;
