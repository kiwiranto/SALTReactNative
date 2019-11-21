import React from 'react';
import { View, Text, Button, ToastAndroid } from 'react-native';
import CButton from '../../Components/CButton';
import CTextInput from '../../Components/CTextInput';
import { styleLogin } from './style';
import { validateEmail } from '../../Helper/helper';

export default class LoginScreen extends React.Component {
	state = {
		isLoading: false,
		username: '',
		password: '',
	};

	_handlerGoToHome = username => {
		this.props.navigation.navigate('Home', { username: username });
	};

	_validateLogin = () => {
		if (!validateEmail(this.state.username)) {
			ToastAndroid.show('Email not valid!', ToastAndroid.SHORT);

			return true;
		}

		if (this.state.password.length < 8) {
			ToastAndroid.show('Password length min 8!', ToastAndroid.SHORT);

			return true;
		}

		this._submitLogin();
	};

	_submitLogin = () => {
		this.setState(
			{
				isLoading: true,
			},
			() => {
				setTimeout(() => {
					this.setState({
						isLoading: false,
					});

					this._handlerGoToHome(this.state.username);
				}, 1000);
			},
		);
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					padding: 20,
				}}>
				<Text style={{ alignSelf: 'center' }}>Login Screen</Text>

				<CTextInput
					styleContainer={styleLogin.formInput}
					onChangeText={val => {
						this.setState({ username: val });
					}}
				/>
				<CTextInput
					styleContainer={styleLogin.formInput}
					secureTextEntry={true}
					onChangeText={val => {
						this.setState({ password: val });
					}}
					icon={true}
				/>

				<CButton
					styleContainer={{
						flex: 1,
						margin: 20,
						flexDirection: 'column',
					}}
					title={'LOGIN'}
					color={'#000'}
					isLoading={this.state.isLoading}
					onPress={this._validateLogin}
				/>
			</View>
		);
	}
}
