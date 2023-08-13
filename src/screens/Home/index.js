import colors from '@constants/colors';
import { heightPixel, widthPixel } from '@utils/helper';
import React from 'react';
import { Text, View } from 'react-native';

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: colors.theme,
			}}
		>
			<View
				style={{
					height: heightPixel(100),
					backgroundColor: colors.secondary,
					width: widthPixel(100),
				}}
			>
				<Text style={{ color: colors.text }}>Home</Text>
			</View>
		</View>
	);
};

export default Home;
