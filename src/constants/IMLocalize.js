/* eslint-disable prettier/prettier */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import en from './translations/en';
import hi from './translations/hi';

const LANGUAGES = {
    en,
    hi,
};

const LANG_CODES = Object.keys(LANGUAGES);
const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
        AsyncStorage.getItem('user-language', (err, language) => {
            if (err || !language) {
                const findBestAvailableLanguage =
                    RNLocalize.findBestAvailableLanguage(LANG_CODES);
                callback(findBestAvailableLanguage.languageTag || 'en');
                return;
            }
            callback(language);
        });
    },
    init: () => { },
    cacheUserLanguage: language => {
        AsyncStorage.setItem('user-language', language);
    },
};
i18n

    .use(LANGUAGE_DETECTOR)
    .use(initReactI18next)
    .init({
        resources: LANGUAGES,
        compatibilityJSON: 'v3',
        react: {
            useSuspense: false,
        },
        interpolation: {
            escapeValue: false,
        },
        defaultNS: 'common',
    });
