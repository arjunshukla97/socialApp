import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '@constants/colors';

export const Loader = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItem: 'center',
				backgroundColor: colors.background,
			}}
		>
			<ActivityIndicator color={colors.primary} />
		</View>
	);
};
