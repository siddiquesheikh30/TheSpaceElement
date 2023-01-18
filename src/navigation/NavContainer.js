/* eslint-disable prettier/prettier */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import ProductDetails from '../screens/productDetails/ProductDetails';
import SelectLanguage from '../screens/selectLanguage/SelectLanguage';
// import useUserInfo from '../hooks/useUserInfo';

const Stack = createNativeStackNavigator();

function NavContainer() {
    // const { isLoggedIn } = useUserInfo();
    // console.log('userInfo>>>', isLoggedIn);
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Select-Lang" component={SelectLanguage} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product-detail" component={ProductDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavContainer;
