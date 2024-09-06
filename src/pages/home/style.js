import { StyleSheet } from 'react-native';

import { DEVICE_SETTINGS, Styles } from '../../constants/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Styles.appBackground,
        paddingTop: DEVICE_SETTINGS.statusBarHeight,
    },
    headerContainer: {
        columnGap: 24,
        paddingLeft: 16,
        paddingVertical: 4,
        alignItems: Styles.center,
        flexDirection: Styles.row,
    },
    title: {
        ...Styles.header,
    },
    itemHeader: {
        paddingTop: 4,
        paddingLeft: 36,
        ...Styles.header,
    },
    carouselItem: {
        flex: 1,
        elevation: 5,
        marginRight: 16,
        shadowRadius: 5,
        borderRadius: 28,
        shadowOpacity: 0.2,
        shadowColor: Styles.white,
        shadowOffset: { width: 0, height: 0 },
        backgroundColor: Styles.appBackground,
    },
    standardItem: {
        flex: 1,
        padding: 16,
        borderRadius: 28,
        justifyContent: Styles.flexEnd,
    },
    nonStandardItem: {
        flex: 1,
        padding: 16,
        borderRadius: 28,
        justifyContent: Styles.spaceBetween,
    },
    standardItemDetails: {
        columnGap: 20,
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        ...Styles.contentCenter,
        flexDirection: Styles.row,
        alignSelf: Styles.flexStart,
        backgroundColor: Styles.blackWithOpacity,
    },
    nonStandardItemDetails: {
        padding: 16,
        borderRadius: 20,
        ...Styles.contentCenter,
        backgroundColor: Styles.blackWithOpacity,
    },
    subTitle: {
        fontSize: 24,
        color: Styles.white,
        textAlign: Styles.center,
        fontFamily: Styles.openSans,
    },
    continue: {
        fontSize: 15,
        color: Styles.grey,
        fontFamily: Styles.openSans,
        fontWeight: Styles.fontWeightRegular,
    },
    readyPlayer: {
        fontSize: 17,
        color: Styles.white,
        fontFamily: Styles.openSans,
        fontWeight: Styles.fontWeightRegular,
    },
    rating: {
        padding: 16,
        columnGap: 4,
        borderRadius: 20,
        ...Styles.contentCenter,
        flexDirection: Styles.row,
        alignSelf: Styles.flexEnd,
        backgroundColor: Styles.blackWithOpacity,
    },
    ratingValue: {
        fontSize: 20,
        color: Styles.white,
        fontFamily: Styles.openSans,
    },
    listFooterComponent: {
        height: 50,
    },
});

export default styles;
