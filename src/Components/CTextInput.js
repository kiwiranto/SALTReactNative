import React from 'react';
import { View, Button, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
	container: {
		borderWidth: 1
	},
	icon: {
		position: 'absolute',
		right: 10
	}
})

export default class CTextInput extends React.Component {
	render() {
		const myIcon = <Icon name="eye" size={30} color="#900" style={{...styles.icon}} />;
		
		return (
			<View style={{
				...styles.container, ...this.props.styleContainer
				}}>

				<TextInput
					{...this.props}
					// onChangeText={(val) => {
					// 	this.props.onChangeText(val)
					// }}
				/>

				{this.props.icon ? myIcon : null}
			</View>
		)
	}
}