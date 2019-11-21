import React from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { styles } from './style';
import { globalStyles as gStyle } from '../../Helper/GlobalStyle';

export default class HomeScreen extends React.Component {
	state = {
		username: 'You are not login',
	};

	componentDidMount() {
		this._setName();
	}
	_setName = () => {
		const { navigation } = this.props;
		this.setState({ username: navigation.getParam('username') });
	};

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

				<Text style={gStyle.textCenter}>Hello, {this.state.username}!</Text>

				<TouchableHighlight
					style={styles.buttonContainer}
					onPress={this._onPressButton}
					underlayColor="white">
					<View style={[styles.button, gStyle.rounded]}>
						<Text style={styles.buttonText}>Submit</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}
