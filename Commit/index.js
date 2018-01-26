import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { LandingScreen, LoginWithFacebookScreen, LoginWithNumberScreen } from './screenNames';

import LandingComponent from './components/LandingComponent';
import LoginWithFacebook from './components/LoginWithFacebook';
import LoginWithNumber from './components/LoginWithNumber';
import PlatformScreen from './components/PlatformScreen';


const App = StackNavigator({
	LandingScreen: {
		screen: LandingComponent,
		navigationOptions: {
			headerTitle: '~~~~~ Commit ~~~~~',
	  	},
	},
	LoginWithFacebookScreen: {
		screen: LoginWithFacebook,
		navigationOptions: {
			headerTitle: 'Login with facebook',
	  	},
	},
	LoginWithNumberScreen: {
		screen: LoginWithNumber,
		navigationOptions: {
			headerTitle: 'Login with your number',
	  	},
	},
	PlatformScreen: {
		screen: PlatformScreen,
		navigationOptions: {
			headerTitle: 'Platforms',
		},
	},
});
AppRegistry.registerComponent('Commit', () => App);
