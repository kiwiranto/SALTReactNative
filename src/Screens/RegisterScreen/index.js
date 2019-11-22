import React from 'react';
import { View, Text, ToastAndroid, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CButton from '../../Components/CButton';
import CTextInput from '../../Components/CTextInput';
import { styleLogin } from './style';
import { validateEmail } from '../../Helper/helper';

export default class RegisterScreen extends React.Component {
	state = {
		isLoading: false,
		username: '',
		password: '',
		showPassword: false
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
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styleLogin.container}>
					<View style={styleLogin.flexRow}>
						<Text 
							style={[
								styleLogin.textColor,
								styleLogin.buttonNavigation,
								styleLogin.buttonActive
							]}>Login</Text>
						<Text 
							style={[
								styleLogin.textColor,
								styleLogin.buttonNavigation
						]}>Register</Text>
					</View>
					
					<View style={styleLogin.flexColumn}>
						<CTextInput
							styleContainer={styleLogin.formInput}
							label={'Email'}
							textColor={'#DFE0E4'}
							tintColor='#7d7f80'
							baseColor='#7d7f80'
							onChangeText={val => {
								this.setState({ username: val });
							}}
						/>
						<CTextInput
							styleContainer={styleLogin.formInput}
							secureTextEntry={!this.state.showPassword}
							onChangeText={val => {
								this.setState({ password: val });
							}}
							label={'Password'}
							textColor={'#DFE0E4'}
							tintColor='#7d7f80'
							baseColor='#7d7f80'
							icon={true}
							showPassword={() => {
								this.setState({showPassword: !this.state.showPassword})
							}}
						/>

						<CButton
							buttonStyle={styleLogin.button}
							title={'LOGIN'}
							color={'#000'}
							isLoading={this.state.isLoading}
							onPress={this._validateLogin}
						/>
					</View>
				</View>

			</TouchableWithoutFeedback>
		);
	}
}
