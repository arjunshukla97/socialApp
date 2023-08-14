import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { STACKS } from './appRoutes';
import { Ionicons } from '@expo/vector-icons';
import { getDataFromSecureStore, heightPixel } from '@utils/helper';
import colors from '@constants/colors';
import { createNavigationContainerRef } from '@react-navigation/native';
import { universalGoBack } from './functions';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '@redux/reducer/authSlice';
import { StatusBar } from 'expo-status-bar';

export const navigationRef = createNavigationContainerRef();
const Stack = createNativeStackNavigator();

const Navigator = () => {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		if (!user?.token) fetchUserInfo();
	}, []);

	const fetchUserInfo = async () => {
		let user = JSON.parse(await getDataFromSecureStore('user'));
		dispatch(setUser(user));
	};

	return (
		<SafeAreaProvider>
			<StatusBar
				style={'light'}
				backgroundColor={colors.background}
				translucent={false}
				animated
			/>
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
								backgroundColor: colors.background,
							},
							headerTitleStyle: {
								color: colors.text,
							},
							headerLeft: () => (
								<Ionicons
									name='chevron-back'
									size={heightPixel(30)}
									color={colors.text}
									onPress={universalGoBack}
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
