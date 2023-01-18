/* eslint-disable prettier/prettier */
//import liraries
import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';
import images from '../../assets/images';
import Banner from '../../components/banner/Banner';
import ProductItem from '../../components/productitem/ProductItem';

const productList = [
    {
        id: 'food1',
        src: images.FOOD_1,
        name: 'Burger',
        price: 'INR 60.00',
        detail: 'A hamburger is a sandwich consisting of a cooked meat patty on a bun or roll. You can order a hamburger, fries, and a shake at most fast food restaurants. Hamburgers are traditionally made with ground beef and served with onions, tomatoes, lettuce, ketchup, and other garnishes.',
    },
    {
        id: 'food2',
        src: images.FOOD_2,
        name: 'Noodles',
        price: 'INR 50.00',
        detail: 'noodle, a cooked egg-and-flour paste prominent in European and Asian cuisine, generally distinguished from pasta by its elongated ribbonlike form. Noodles are commonly used to add body and flavour to broth soups. They are commonly boiled or sautéed and served with sauces and meats or baked in casseroles.',
    },
    {
        id: 'food3',
        src: images.FOOD_3,
        name: 'Pizza',
        price: 'INR 125.00',
        detail: 'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot.',
    },
    {
        id: 'food4',
        src: images.FOOD_4,
        name: 'Cake',
        price: 'INR 100.00',
        detail: 'cake, in general, any of a variety of breads, shortened or unshortened, usually shaped by the tin in which it is baked, or, more specifically, a sweetened bread, often rich or delicate.',
    },
    {
        id: 'food5',
        src: images.FOOD_5,
        name: 'Tommato Soup',
        price: 'INR 80.00',
        detail: 'Tomato soup is a comforting classic for a reason: its pretty and creamy; its tangy and rich; and you know you are going to like it before you even take that first bite. Plus, this soup takes very kindly to variation.',
    },
    {
        id: 'food6',
        src: images.FOOD_6,
        name: 'Sandwich',
        price: 'INR 40.00',
        detail: 'sandwich, in its basic form, slices of meat, cheese, or other food placed between two slices of bread. Although this mode of consumption must be as old as meat and bread, the name was adopted only in the 18th century for John Montagu, 4th earl of Sandwich.',
    },
];

const Home = ({ navigation }) => {
    const { t } = useTranslation();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{t('common:home')}</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="cross" size={30} color="#fff" />
                </TouchableOpacity>
            </View>


            <View style={styles.listContainer}>
                <FlatList
                    // eslint-disable-next-line react/no-unstable-nested-components
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <Banner />
                            </View>
                        );
                    }}
                    data={productList}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.listItem} key={index}>
                                <ProductItem renderItem={item} navigation={navigation} />
                            </View>
                        );
                    }}
                    // eslint-disable-next-line react-native/no-inline-styles
                    contentContainerStyle={{ paddingBottom: 10 }}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        backgroundColor: '#cbd28f',
    },
    headerText: {
        fontSize: 18,
        fontWeight: '700',
        color: '#fff',
    },
    listContainer: {
        flex: 1,
        marginVertical: 10,
    },
    listItem: {
        flex: 0.48,
        marginVertical: 5,
        marginHorizontal: 5,
    },
});

export default Home;
