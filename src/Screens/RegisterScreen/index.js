import React from 'react';
import { View, Text, ToastAndroid, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CButton from '../../Components/CButton';
import CTextInput from '../../Components/CTextInput';
import { styleLogin } from './style';
import { validateEmail } from '../../Helper/helper';
import axios from 'axios';
import { connect } from 'react-redux';
import { SET_GLOBAL_DATA, SET_USER_DATA } from '../../Config/Reducer';
const JSON5 = require('json5');

class RegisterScreen extends React.Component {
	state = {
		isLoading: false,
		username: '',
		password: '',
		showPassword: false
	};

	componentDidMount() {
    if('token' in this.props.globalData) {
      this.props.navigation.navigate('Home');
    }
  }

	_handlerGoToHome = username => {
		this.props.navigation.navigate('Home', { username: username });
	};

	_handleHTTPLogin = () => {
		return axios.post('https://private-370066-awesomeproject1.apiary-mock.com/login', {})
	}

	_validateLogin = () => {
		if (!this.state.username || !this.state.password) {
			ToastAndroid.show('Lengkapi Form', ToastAndroid.SHORT);

			return true;
		}
		if (!validateEmail(this.state.username)) {
			ToastAndroid.show('Email not valid!', ToastAndroid.SHORT);

			return true;
		}

		if (this.state.password.length < 4) {
			ToastAndroid.show('Password length min 8!', ToastAndroid.SHORT);

			return true;
		}

		this._submitLogin();
	};

	_submitLogin = async () => {
		this.setState({
			isLoading: true
		})

		let res = await this._handleHTTPLogin();
		let token = JSON5.parse(res.data)[0].access_token;

		// console.log(res)
		try {
			if(res.status === 200) {
				this.props.setGlobalData({token: token});
				this.props.setUserData({username: this.state.username});
	
				this._handlerGoToHome(this.state.username);
			}
		}
		catch(err) {
			console.log(err.message)
		}

		this.setState({
			isLoading: false
		});
	};

	render() {
		return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View style={styleLogin.container}>
					<View style={styleLogin.flexRow}>
						<Text 
							style={[
								styleLogin.textColor,
								styleLogin.buttonNavigation
							]}>Login</Text>
						<Text 
							style={[
								styleLogin.textColor,
								styleLogin.buttonNavigation,
								styleLogin.buttonActive
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
							onPress={() => {
								this._validateLogin();
						}}
						/>
					</View>
				</View>

			</TouchableWithoutFeedback>
		);
	}
}

const mapStateToProps = state => {
	const {userData , globalData} = state;
	
	return {userData, globalData};
}

const mapDispatchToProps = dispatch => {
	return {
		setGlobalData: globalData => {
			return dispatch({
				type: SET_GLOBAL_DATA,
				globalData: globalData
			})
		},
		setUserData: userData => {
			return dispatch({
				type: SET_USER_DATA,
				userData: userData
			})
		},
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RegisterScreen)