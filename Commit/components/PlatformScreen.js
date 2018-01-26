import React, { Component } from 'react';
import { Text, View } from 'react-native';


export default class PlatformScreen extends Component {
	render() {
		return (
			<View style={{
				flex: 1,
				backgroundColor: 'tomato',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
				<Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
					Select your platform here!
				</Text>
			</View>
		);
	}
}
