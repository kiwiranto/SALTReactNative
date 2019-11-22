import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextField } from 'react-native-material-textfield';
import Ripple from 'react-native-material-ripple';

const styles = StyleSheet.create({
	icon: {
		position: 'absolute',
		right: 10,
		bottom: -16
	},
	zIndexBase: {
		zIndex: 0
	},
	zIndex1: {
		zIndex: 1
	}
})

export default class CTextInput extends React.Component {
	state = {
		icon: 'eye'
	}

	_changeIcon = () => {
		this.setState(prevState => ({
			icon: prevState.icon === 'eye' ? 'eye-slash' : 'eye'
		}));
	}

	render() {
		const myIcon = <Icon name={this.state.icon} size={24} color="#fff"/>;
		
		return (
			<View style={{
					...this.props.styleContainer
				}}>

				<TextField 
					{...this.props}
					style={styles.zIndexBase}
				/>

				<Ripple 
					style={[styles.icon, styles.zIndex1]}
					rippleColor={'white'}
					rippleOpacity={1}
					onPress={() => {
						this._changeIcon();
						this.props.showPassword();
					}}
				>
					{this.props.icon ? myIcon : null}
				</Ripple>
			</View>
		)
	}
}