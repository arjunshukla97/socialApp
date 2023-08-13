import React, { useEffect } from 'react';
import { View } from 'react-native';
import colors from '@constants/colors';
import { getFeed } from '@redux/action/home';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '@components/PostList';

const Home = () => {
	const dispatch = useDispatch();
	const { homeLoading, postList } = useSelector(state => state.home);

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
				backgroundColor: colors.background,
			}}
		>
			<PostList data={postList} />
		</View>
	);
};

export default Home;
