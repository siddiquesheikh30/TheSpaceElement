/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import Entypo from 'react-native-vector-icons/Entypo';

import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {
    LoginManager,
    GraphRequest,
    GraphRequestManager,
} from 'react-native-fbsdk';
import images from '../../assets/images';

const Login = ({ navigation }) => {

    const { t } = useTranslation();

    const fbLogin = resCallback => {
        LoginManager.logOut();
        return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
            result => {
                console.log('fb result>>>', result);
                if (
                    result.declinedPermissions &&
                    result.declinedPermissions.includes('email')
                ) {
                    resCallback({ message: 'Email is required' });
                }
                if (result.isCancelled) {
                    console.log('error');
                } else {
                    const infoRequest = new GraphRequest(
                        '/me?fields=email,name,picture',
                        null,
                        resCallback,
                    );
                    new GraphRequestManager().addRequest(infoRequest).start();
                }
            },
            function (err) {
                console.log('Login failed with error:', err);
            },
        );
    };

    const onFbLogin = async () => {
        try {
            await fbLogin(_responseInfoCallBack);
        } catch (error) {
            console.log('error raised', error);
        }
    };

    const _responseInfoCallBack = async (error, result) => {
        if (error) {
            console.log('error top', error);
            return;
        } else {
            const userData = result;
            console.log('fb data ++++', userData);
        }
    };

    const googleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            // this.setState({ userInfo });
            console.log('userInfo', userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('error>>>', error);
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('error>>>', error);
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('error>>>', error);
                // play services not available or outdated
            } else {
                console.log('error>>>', error);
                // some other error happened
            }
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-end' }}>
                <Entypo name="cross" size={35} color="#fff" />
            </TouchableOpacity>
            <View style={styles.imageContainer}>
                <Image resizeMode="contain" style={styles.image} source={images.LOGIN_LOGO} />
            </View>
            <Text style={styles.logo}>The SPACE ELEMENT</Text>

            <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={30} color="#000" />
                <TextInput style={styles.input} placeholder={t('common:username')} />
            </View>

            <View style={styles.inputContainer}>
                <SimpleLineIcons name="lock" size={30} color="#000" />
                <TextInput style={styles.input} placeholder={t('common:password')} secureTextEntry={true} />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginBtn}>
                <Text style={styles.loginBtnText}>{t('common:login')}</Text>
            </TouchableOpacity>

            <View style={styles.block}>
                <View style={styles.blockLine} />
                <Text style={styles.blockText}>{t('common:or')}</Text>
                <View style={styles.blockLine} />
            </View>


            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnStyle} onPress={onFbLogin}>
                    <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={images.FACEBOOK} />
                </TouchableOpacity>


                <TouchableOpacity style={[styles.btnStyle, { padding: 9 }]} onPress={googleLogin}>
                    <Image style={{ height: '100%', width: '100%' }} resizeMode="contain" source={images.GOOGLE} />
                </TouchableOpacity>



            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#cbd28f',
    },
    imageContainer: {
        padding: 15,
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: '#cbd28f',
    },
    image: { width: 200, height: 200 },
    logo: {
        textAlign: 'center',
        marginVertical: 15,
        fontSize: 28,
        color: '#000',
        fontWeight: '700',
    },
    inputContainer: {
        marginTop: 10,
        padding: 8,
        borderRadius: 8,
        borderColor: '#fff',
        borderWidth: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        marginLeft: 10,
        width: '85%',
        fontSize: 16,
    },
    loginBtn: {
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
    block: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    blockLine: {
        backgroundColor: '#fff',
        height: 1.3,
        width: '30%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    blockText: {
        color: '#fff',
        fontSize: 16,
        marginHorizontal: 8,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        alignSelf: 'center',
    },
    btnStyle: {
        width: '45%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    btnText: {
        color: 'white',
    },
});

export default Login;
