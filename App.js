import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator, { navigationRef } from './src/navigator';
import { Provider } from 'react-redux';
import store from '@redux/store';

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer ref={navigationRef}>
				<Navigator />
			</NavigationContainer>
		</Provider>
	);
}
