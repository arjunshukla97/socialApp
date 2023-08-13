import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { STACKS } from './appRoutes';
import { Ionicons } from '@expo/vector-icons';
import { heightPixel } from '@utils/helper';
import colors from '@constants/colors';
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
							headerTitleAlign: 'center',
							headerStyle: {
								backgroundColor: colors.theme,
							},
							headerTitleStyle: {
								color: colors.text,
							},
							headerLeft: () => (
								<Ionicons
									name='chevron-back'
									size={heightPixel(25)}
									color={colors.text}
									// onPress={handleGoBack}
								/>
							),
						}}
					/>
				))}
			</Stack.Navigator>
		</SafeAreaProvider>
	);
};

export default Navigator;
