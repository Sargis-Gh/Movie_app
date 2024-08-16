import { StyleSheet } from 'react-native';

import { DEVICE_SETTINGS, Styles } from '../../constants/constants';

const styles = StyleSheet.create({
    appIntroSlider: {
        backgroundColor: Styles.white,
    },
    dotStyle: {
        backgroundColor: Styles.lightGrey,
    },
    activeDotStyle: {
        backgroundColor: Styles.purple,
    },
    buttonContainer: {
        paddingBottom: 20,
        alignItems: Styles.center,
        justifyContent: Styles.center,
        backgroundColor: Styles.white,
    },
    getStarted: {
        padding: 8,
        borderRadius: 10,
        alignItems: Styles.center,
        backgroundColor: Styles.purple,
    },
    getStartedText: {
        fontSize: 18,
        color: Styles.white,
        fontFamily: Styles.openSans,
    },
    slide: {
        alignItems: Styles.center,
        justifyContent: Styles.center,
        backgroundColor: Styles.white,
        marginTop: DEVICE_SETTINGS.statusBarHeight,
    },
    image: {
        width: Styles.fullSize,
        height: DEVICE_SETTINGS.windowHeight / 2,
    },
    title: {
        fontSize: 20,
        color: Styles.purple,
        fontFamily: Styles.openSans,
        fontWeight: Styles.fontWeightBold,
    },
    subtitle: {
        padding: 16,
        fontSize: 15,
        color: Styles.purple,
        textAlign: Styles.center,
        fontFamily: Styles.openSans,
    },
});

export default styles;
