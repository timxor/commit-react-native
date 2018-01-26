import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';


export default class LoginWithFacebook extends Component {

	_fbAuth() {
		LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
			if(result.isCancelled) {
				console.log('Login cancelled');
			} else {
				console.log('Login success: ' + result.grantedPermissions);
			}
		}, function(error) {
			console.log('Promise was rejected: ' + error);
		})
	}

	render() {
		return (

			<View style={styles.container}>
				<TouchableOpacity onPress={this._fbAuth}>
					<Text>
						Login with facebook
					</Text>
				</TouchableOpacity>
			</View>
	);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
