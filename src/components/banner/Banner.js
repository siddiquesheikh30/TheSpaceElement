/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-looped-carousel';
import images from '../../assets/images';

const Banner = () => {
    const [layoutStyle, setLayoutStyle] = useState({
        width: '95%',
        height: 300,
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 10,
    });

    const bannerImages = [
        {
            id: 1,
            img: images.CAROUSEL_1,
        },
        {
            id: 2,
            img: images.CAROUSEL_2,
        },
        {
            id: 3,
            img: images.CAROUSEL_3,
        },
    ];

    return (
        <View style={styles.container}>
            <Carousel
                delay={2000}
                style={layoutStyle}
                autoplay
                pageInfo
                pagingEnabled
                contentContainerStyle={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                }}
                bullets={true}
                bulletStyle={{
                    backgroundColor: '#fff',
                    color: 'white',
                    height: 12,
                    width: 12,
                }}
                chosenBulletStyle={{
                    backgroundColor: 'gray',
                    fontSize: 15,
                    width: 12,
                    height: 12,
                }}
                bulletsContainerStyle={{
                    left: '10%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: 'transparent',
                    width: '2%',
                    height: '2%',
                    marginLeft: '30%',
                }}>
                {bannerImages.map(item => {
                    return (
                        <View
                            key={item.id}
                            style={[
                                layoutStyle,
                                {
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    borderRadius: 10,
                                },
                            ]}>
                            <Image
                                resizeMode='stretch'
                                source={item.img}
                                style={{ borderRadius: 20, height: '100%', width: '100%' }} />
                        </View>
                    )
                })}
            </Carousel>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
    },
});

export default Banner;
