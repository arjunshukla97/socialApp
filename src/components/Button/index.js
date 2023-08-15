import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '@constants/colors';
import { styles } from './styles';

export const Button = ({
	onPress,
	title = '',
	loading = false,
	style = {},
	disabled = false,
}) => {
	return (
		<LinearGradient
			colors={
				disabled
					? [colors.disabled, colors.disabled]
					: [colors.secondary, colors.primary]
			}
			style={[styles.linearGradient, style]}
			start={{ x: 0, y: 1 }}
			end={{ x: 1, y: 0 }}
		>
			{loading ? (
				<ActivityIndicator
					animating={true}
					size={'small'}
					color={colors.text}
				/>
			) : (
				<Text
					disabled={loading || disabled}
					onPress={onPress}
					style={styles.buttonText}
				>
					{title}
				</Text>
			)}
		</LinearGradient>
	);
};
