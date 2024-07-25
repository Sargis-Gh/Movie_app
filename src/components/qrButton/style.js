import { StyleSheet } from 'react-native'

import { Styles } from '../../constants/constants'

const styles = StyleSheet.create({
    touchableContent: {
        width: 70,
        bottom: 30,
        elevation: 2,
        aspectRatio: 1,
        shadowRadius: 4,
        borderRadius: 35,
        shadowOpacity: 0.3,
        ...Styles.contentCenter,
        shadowColor: Styles.articleColor,
        backgroundColor: Styles.articleColor,
        shadowOffset: { width: 0, height: 1 },
    },
})

export default styles
