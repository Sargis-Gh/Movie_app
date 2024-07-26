import { Dimensions } from "react-native"

export const PageName = {
    qr: 'QR',
    tabs: 'Tabs',
    home: 'Home',
    intro: 'Intro',
    sign: 'Sign In',
    drawer: 'Drawer',
    loading: 'Loading',
    profile: 'Profile',
    first: 'First Page',
    settings: 'Settings',
    favorites: 'Favorites',
    onBoarding: 'OnBoarding',
    universities: 'Universities',
}

export const Styles = {
    // Font Weihghts
    fontWeightThin: '100', // Thin
    fontWeightUltraLight: '200', // Ultra Light
    fontWeightLight: '300', // Light
    fontWeightRegular: '400', // Regular
    fontWeightMedium: '500', // Medium
    fontWeightSemibold: '600', // Semibold
    fontWeightBold: '700', // Bold
    fontWeightHeavy: '800', // Heavy
    fontWeightBlack: '900', // Black

    // Font Families
    openSans: 'Open Sans',

    // Colors
    green: '#77BB41',
    red: 'rgb(255, 0, 0)',
    blue: 'rgb(0,191,255)',
    black: 'rgb(0, 0, 0)',
    purple: 'rgb(43, 19, 137)',
    pink: 'rgb(229, 125, 222)',
    white: 'rgb(255, 255, 255)',
    grey: 'rgba(136, 152, 170, 1)',
    darkBlue: 'rgba(26, 23, 77, 1)',
    lightBlue: 'rgba(23, 43, 77, 1)',
    titleColor: 'rgba(50, 50, 93, 1)',
    lightGrey: 'rgba(202, 209, 215, 1)',
    articleColor: 'rgba(94, 114, 228, 1)',
    backgroundColor: 'rgb(243, 245, 251)',
    textInputGrey: 'rgba(173, 181, 189, 1)',
    greyWithalpha: 'rgba(240, 239, 244, 0)',
    bottomContainerColor: 'rgb(244, 245, 247)',
    containerBackgroundColor: 'rgb(240, 239, 244)',

    // Positions
    row: 'row',
    center: 'center',
    fullSize: '100%',
    flexStart: 'flex-start',
    spaceAround: 'space-around',
    spaceBetween: 'space-between',

    contentCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    }
}


export const AppWords = {
    google: 'GOOGLE',
    gitHub: 'GITHUB',
}

export const LanguageLocalizationKey = {
    en: 'en-US',
    ru: 'ru-RU',
}

export const LanguageLocalizationNSKey = {
    home: 'home',
    signIn: 'signIn',
    profile: 'profile',
    settings: 'settings',
    bottomTab: 'bottomTab',
    onboarding: 'onboarding',
    university: 'university',
}

export const PlatformName = {
    ios: 'ios',
    android: 'android',
}

export const DEVICE_SETTINGS = {
    windowWidth: Dimensions.get('window').width,
    screenWidth: Dimensions.get('screen').width,
    screenHeight: Dimensions.get('screen').height,
    windowHeight: Dimensions.get('window').height,
}

export const AsyncStorageKeys = {
    language: 'language'
}

export const AppURL = {
    universities: 'http://universities.hipolabs.com/search?country=United+States'
}