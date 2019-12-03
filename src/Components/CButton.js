import React from 'react';
import {
	View,
	StyleSheet,
	Text,
	ActivityIndicator
} from 'react-native';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
	margin: {
		marginTop: 40
	},
	button: {
		fontSize: 16,
		textAlign: 'center',
		color: '#fff'
	}
})

export default class CButton extends React.Component {

	render() {
		return (
			<View>
				<Ripple style={[this.props.buttonStyle, styles.margin]} rippleColor={'white'} rippleOpacity={1} rippleDuration={500} onPress={() => { this.props.onPress() }} disabled={this.props.isLoading}>
					{
						this.props.isLoading ? <ActivityIndicator /> : <Text style={[styles.button]} >{this.props.title}</Text>
					}
				</Ripple>
			</View>
			
		);
	}
}
