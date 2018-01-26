import React, { Component } from 'react';
import { LoginWithFacebookScreen, LoginWithNumberScreen, PlatformScreen } from '../screenNames';
import Button from 'react-native-button';
import { Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';





export default class LandingComponent extends React.Component {



// to do-- for redirect after legit log or how to manage state of log
//
// see :
// https://github.com/reactjs/redux/issues/297#issuecomment-124116124
//
// componentWillMount

	_fbAuth() {

	  LoginManager.logInWithReadPermissions(['public_profile']).then(function(result) {
	    if(result.isCancelled) {
	      alert('Login cancelled');
	    } else {
	      alert('Login success: ' + result.grantedPermissions);
		  {this.props.navigate(PlatformScreen);}
	    }
	  }, function(error) {
	    alert('Promise was rejected: ' + error);
	  })
	}




	render() {
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<Text style={styles.text}>Welcome to Commit</Text>


				<Button containerStyle={styles.btnContainer}
						style={styles.btn}
						onPress={this._fbAuth}
				>

				<Text style={styles.btn}>Login with Facebook</Text>
				</Button>

				<Button containerStyle={styles.btnContainerPhone}
						style={styles.btn}
						onPress={() => {navigation.navigate(LoginWithNumberScreen); }}

				>
					<Text style={styles.btnPhoneNumber}>Login with phone number</Text>
				</Button>

			</View>
		);
	}
}


const styles = StyleSheet.create({
  container: {
	flex: 1,
  	backgroundColor: 'dodgerblue',
  	alignItems: 'center',
  	justifyContent: 'center',
  },
    btnContainer: {
        padding: 10,
        margin: 20,
        width: 200,
        height: 45,
        borderRadius: 10,
        alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'darkblue',
    },
	btnContainerPhone: {
		padding: 10,
		margin: 20,
		width: 200,
		height: 45,
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
  btn: {
    fontSize: 18,
    color: 'white',
  fontWeight: 'bold',
  },
	btnPhoneNumber: {
		fontSize: 14,
		color: 'darkgrey',
		fontWeight: 'bold',
	},
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'white',
  },
});
