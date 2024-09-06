import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';
import { t } from '../../../../localization/i18n';
import { Icons } from '../../../../constants/Icons';
import CustomTextInput from '../../../../components/textInput/TextInput';
import { LanguageLocalizationNSKey, PageName } from '../../../../constants/constants';

import { navigationReplace } from '../../../../navigation/navigation';

class LoginForm extends React.Component {
    state = {
        error: '',
        email: 'Email',
        password: 'password',
    };

    handleSignIn = () => {
        const { navigation } = this.props;
        const { email, password } = this.state;

        const correctEmail = 'Email';
        const correctPassword = 'password';

        if (correctEmail === email && correctPassword === password) {
            navigationReplace(navigation, PageName.tabs);
            return;
        }
        this.setState({
            error: t('texts.invalidEmailOrPassword', LanguageLocalizationNSKey.signIn),
        });
    };

    renderSignInButton = () => (
        <TouchableOpacity
            delayPressIn={100}
            activeOpacity={0.7}
            style={styles.signIn}
            onPress={this.handleSignIn}>
            <Text style={styles.signInText}>{t('title', LanguageLocalizationNSKey.signIn)}</Text>
        </TouchableOpacity>
    );

    renderError = (error) => <Text style={styles.errorMessage}>{error}</Text>;

    render() {
        const { email, password, error } = this.state;
        return (
            <View style={styles.loginForm}>
                <CustomTextInput
                    value={email}
                    Icon={<Icons.Mail />}
                    placeholderText={t('texts.email', LanguageLocalizationNSKey.signIn)}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <CustomTextInput
                    value={password}
                    secureTextEntry={true}
                    Icon={<Icons.Password />}
                    placeholderText={t('texts.password', LanguageLocalizationNSKey.signIn)}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                {!!error && this.renderError(error)}
                {this.renderSignInButton()}
            </View>
        );
    }
}

export default LoginForm;
