import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

import styles from './style'
import { t } from '../../../../localization/i18n'
import { Icons } from '../../../../constants/Icons'
import CustomTextInput from '../../../../components/textInput/TextInput'
import { LanguageLocalizationNSKey, PageName } from '../../../../constants/constants'
import { navigationNavigate } from '../../../../navigation/navigation'

class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
    }

    handleSignIn = () => {
        const { email, password } = this.state
        const { navigation } = this.props

        const correctEmail = 'email'
        const correctPassword = 'password'

        if (email === correctEmail && password === correctPassword) {
            navigationNavigate(navigation, PageName.tabs)
            return
        }
        this.setState({ error: 'texts.invalidEmailOrPassword' })

    }

    renderSignInButton = () => {
        return (
            <TouchableOpacity style={styles.signIn} activeOpacity={0.7} onPress={this.handleSignIn}>
                <Text style={styles.signInText}>{t('title', LanguageLocalizationNSKey.signIn)}</Text>
            </TouchableOpacity>
        )
    }

    renderError = (error, localizationKey) => {
        return <Text style={styles.field}>{t(error, localizationKey)}</Text>
    }

    render() {
        const { email, password, error } = this.state

        return (
            <View style={styles.loginForm}>
                <CustomTextInput
                    Icon={<Icons.Mail />}
                    value={email}
                    placeholderText={t('texts.email', LanguageLocalizationNSKey.signIn)}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <CustomTextInput
                    Icon={<Icons.Password />}
                    value={password}
                    secureTextEntry={true}
                    placeholderText={t('texts.password', LanguageLocalizationNSKey.signIn)}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                {!!error && this.renderError(error, LanguageLocalizationNSKey.signIn)}
                {this.renderSignInButton()}
            </View>
        )
    }
}

export default LoginForm
