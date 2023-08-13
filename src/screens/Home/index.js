import colors from '@constants/colors';
import { heightPixel, widthPixel } from '@utils/helper';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const Home = () => {
	const { homeLoading } = useSelector(state => state.home);

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
