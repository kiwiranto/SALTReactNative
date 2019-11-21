import React from 'react';
import {
	View,
	StyleSheet,
	Text,
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'column',
	},
	button: {
		backgroundColor: '#000',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center'
	}
});

export default class CButton extends React.Component {

	render() {
		return (
			<View style={{
					...styles.container,
					...this.props.styleContainer
				}}> 

				<Ripple style={{...styles.button}} rippleColor={'yellow'} rippleOpacity={1} rippleDuration={1000}>
					<Text style={{...styles.buttonText}}>{this.props.title}</Text>
				</Ripple>
			</View>
		);
	}
}
