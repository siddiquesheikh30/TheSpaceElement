/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import '../../constants/IMLocalize';
import images from '../../assets/images';

const langData = [
    { title: 'ENGLISH', code: 'en' },
    { title: 'हिंदी', code: 'hi' },
];

function SelectLanguage(props) {

    const { navigation } = props;
    const { t, i18n } = useTranslation();

    const setLanguage = (code) => {
        return i18n.changeLanguage(code);
    };

    const [selected, setSelected] = React.useState('en');

    // eslint-disable-next-line react/no-unstable-nested-components
    function LangButton(data) {
        const { title, code } = data;
        return (
            <TouchableOpacity
                style={[
                    styles.texhtouch,
                    // eslint-disable-next-line react-native/no-inline-styles
                    { borderBottomWidth: selected === code ? 4 : 0 },

                ]}
            >
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        textAlign: 'center',
                        fontSize: 17,
                        color: selected === code ? '#187aa6' : 'black',
                    }}
                    onPress={() => {
                        setLanguage(code);
                        navigation.navigate('Login');
                        setSelected(code);
                    }}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.screencont}>
            <View style={styles.logoBox}>
                <Image source={images.TRANSLATE} style={styles.logo} />
                <Text style={styles.subtitile}>{t('common:languageSelector')}</Text>
            </View>
            <View style={styles.langOption}>
                {langData.map((item, index) => {
                    return (
                        <View key={index} style={styles.selectors}>
                            <LangButton code={item.code} title={item.title} />
                        </View>
                    );
                })}
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    screencont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cbd28f',
    },
    logoBox: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 200,
        height: 200,
    },
    langOption: {
        marginTop: 200,
        paddingHorizontal: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    texhtouch: {
        borderBottomColor: '#187aa6',
        padding: 10,
    },
    selectors: {
        width: '50%',
    },
    subtitile: {
        fontSize: 18,
        color: '#fff',
        marginVertical: 20,
    },
});
export default SelectLanguage;


