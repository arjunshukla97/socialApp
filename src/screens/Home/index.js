import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '@constants/colors';
import { getFeed } from '@redux/action/home';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '@components/PostList';

const Home = () => {
	const dispatch = useDispatch();
	const { homeLoading, postList, limit, offset } = useSelector(
		state => state.home,
	);

	useEffect(() => {
		fetchFeed();
	}, []);

	const fetchFeed = () => {
		dispatch(getFeed({ limit, offset }));
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.background,
			}}
		>
			{postList?.length > 0 ? (
				<PostList
					data={postList}
					onEndReached={fetchFeed}
					onEndReachedThreshold={0.7}
					ListFooterComponent={() =>
						postList?.length > 0 ? (
							<ActivityIndicator color={colors.primary} />
						) : null
					}
				/>
			) : null}
		</View>
	);
};

export default Home;
