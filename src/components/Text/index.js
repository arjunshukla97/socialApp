import React from 'react';
import { Text as GText } from 'react-native';
import { useFonts } from 'expo-font';
import { useTheme } from '@react-navigation/native';
import colors from '@constants/colors';

export default function Text(
	{ children, style, numberOfLines, onPress },
	props,
) {
	const [fontsLoaded] = useFonts({
		400: require('@assets/fonts/Roboto-Regular.ttf'),
		500: require('@assets/fonts/Roboto-Medium.ttf'),
		700: require('@assets/fonts/Roboto-Bold.ttf'),
	});

	if (!fontsLoaded) {
		return null;
	}
	return (
		<>
			<GText
				{...props}
				allowFontScaling={false}
				numberOfLines={numberOfLines}
				onPress={onPress}
				style={{
					color: colors.text,
					...style,
					fontFamily: style?.fontWeight ? style.fontWeight : '400',
				}}
			>
				{children}
			</GText>
		</>
	);
}
