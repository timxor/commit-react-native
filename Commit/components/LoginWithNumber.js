import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Button from 'react-native-button';


export default class LoginWithNumber extends Component {
	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor: 'tomato',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
				Enter your number here to verify you are a human ;)
			</Text>
		</View>
	);
	}
}
