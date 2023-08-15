import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator, { navigationRef } from './src/navigator';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
	return (
		<RootSiblingParent>
			<Provider store={store}>
				<NavigationContainer ref={navigationRef}>
					<Navigator />
				</NavigationContainer>
			</Provider>
		</RootSiblingParent>
	);
}
