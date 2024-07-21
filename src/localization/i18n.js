import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { en, ru } from './translations/index'

const STORE_LANGUAGE_KEY = 'settings.lang'

const languageDetectorPlugin = {
    type: 'languageDetector',
    async: true,
    init: () => {},
    detect: async function (callback) {
        try {
            // get stored language from Async storage
            // put your own language detection logic here
            await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then((language) =>
                callback(language || 'en'),
            )
        } catch (error) {
            console.log('Error reading language', error)
        }
    },
    cacheUserLanguage: async function (language) {
        try {
            // save a user's language choice in Async storage
            await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language)
        } catch (error) {}
    },
}

const resources = {
    en: {
        translation: en,
    },
    ru: {
        translation: ru,
    },
}

i18n.use(initReactI18next)
    .use(languageDetectorPlugin)
    .init({
        resources,
        compatibilityJSON: 'v3',
        // fallback language is set to english
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n