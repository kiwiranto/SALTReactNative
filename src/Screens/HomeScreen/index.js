import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { styles } from './style';
import { globalStyles as gStyle } from '../../Helper/GlobalStyle';
import { connect } from 'react-redux';
import { SET_GLOBAL_DATA, SET_USER_DATA } from '../../Config/Reducer';
import CButton from '../../Components/CButton';

class HomeScreen extends React.Component {
	state = {
		username: 'You are not login',
	};

	componentDidMount() {
		// this._setName();
		console.log(this.props.globalData)
	}
	_setName = () => {
		const { navigation } = this.props;
		// this.setState({ username: navigation.getParam('username') });
		// this.setState({ username: this.props.userData.username})
	};

	_logout = (state) => {
		this.props.setGlobalData({})

		this.props.navigation.navigate('Login');
	}

	render() {
		return (
			<View style={[gStyle.container, gStyle.borderWidth, gStyle.margin]}>
				<View style={[gStyle.alignSelf, gStyle.padding]}>
					<Image
						source={{
							uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
							width: 64,
							height: 64,
						}}
					/>
				</View>

				<Text style={gStyle.textCenter}>Hello, {this.props.userData.username}</Text>
				
				<View style={styles.buttonContainer}>
					<CButton
						buttonStyle={[styles.button, gStyle.rounded, styles.buttonText]}
						title={'Logout'}
						color={'#000'}
						isLoading={this.state.isLoading}
						onPress={() => {
							this._logout(this.props.globalData)
					}}
					/>
				</View>
			</View>
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
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen)