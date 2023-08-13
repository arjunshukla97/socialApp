import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { STACKS } from './appRoutes';

const Stack = createNativeStackNavigator();

const Navigator = () => {
	return (
		<SafeAreaProvider>
			<Stack.Navigator>
				{STACKS?.map((item, index) => (
					<Stack.Screen
						key={index}
						name={item?.key}
						component={item?.component}
						options={{
							title: item?.title,
							headerShown: !!item?.title || !!item?.header,
							animation: item?.animation || 'slide_from_right',
							presentation: item?.presentation || 'card',
						}}
					/>
				))}
			</Stack.Navigator>
		</SafeAreaProvider>
	);
};

export default Navigator;
