import colors from '@constants/colors';
import { getFeed } from '@redux/action/home';
import { heightPixel, widthPixel } from '@utils/helper';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();
	const { homeLoading } = useSelector(state => state.home);

	useEffect(() => {
		fetchFeed();
	}, []);

	const fetchFeed = () => {
		dispatch(getFeed());
	};

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
