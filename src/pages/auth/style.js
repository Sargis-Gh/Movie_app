import { StyleSheet } from 'react-native';

import { Styles, DEVICE_SETTINGS } from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        rowGap: 32,
        padding: 16,
        justifyContent: Styles.center,
        backgroundColor: Styles.appBackground,
        paddingTop: DEVICE_SETTINGS.statusBarHeight,
        paddingBottom: DEVICE_SETTINGS.homeIndicatorHeight,
    },
    closeButton: {
        alignSelf: Styles.flexStart,
    },
    body: {
        padding: 16,
        borderRadius: 10,
        alignItems: Styles.center,
        backgroundColor: Styles.white,
    },
    bottomContainer: {
        padding: 20,
        paddingTop: 0,
        borderRadius: 5,
        width: Styles.fullSize,
        alignItems: Styles.center,
        backgroundColor: Styles.bottomContainerColor,
    },
    signInOrSignUp: {
        columnGap: 16,
        paddingBottom: 32,
        width: Styles.fullSize,
        flexDirection: Styles.row,
        alignItems: Styles.center,
        justifyContent: Styles.spaceBetween,
    },
    buttonContainer: (isActive) => ({
        flex: 1,
        elevation: 3,
        borderRadius: 8,
        shadowRadius: 3,
        shadowOpacity: 0.7,
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: Styles.textInputGrey,
        shadowOffset: { width: 0, height: 2 },
        backgroundColor: (isActive && Styles.appBackground) || Styles.white,
    }),
    subTitle: (isActive) => ({
        fontSize: 18,
        textAlign: Styles.center,
        fontFamily: Styles.openSans,
        fontWeight: Styles.fontWeightRegular,
        color: (isActive && Styles.white) || Styles.textInputGrey,
    }),
    authButton: {
        marginTop: 8,
        elevation: 3,
        borderRadius: 8,
        shadowRadius: 5,
        shadowOpacity: 0.7,
        paddingVertical: 12,
        paddingHorizontal: 40,
        alignSelf: Styles.center,
        shadowColor: Styles.grey,
        alignItems: Styles.center,
        backgroundColor: Styles.appBackground,
        shadowOffset: { width: 0, height: 2 },
    },
    authButtonText: {
        fontSize: 18,
        color: Styles.white,
        fontFamily: Styles.openSans,
    },
    errorMessage: {
        fontSize: 12,
        color: Styles.red,
        alignSelf: Styles.flexStart,
        fontFamily: Styles.openSans,
    },
});

export default styles;
