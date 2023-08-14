import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View } from 'react-native';
import colors from '@constants/colors';
import { getFeed } from '@redux/action/home';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '@components/PostList';
import { styles } from './styles';
import Text from '@components/Text';
import { ProfilePic } from '@components/ProfilePic';

const Home = () => {
	const dispatch = useDispatch();
	const { homeLoading, postList, limit, offset } = useSelector(
		state => state.home,
	);
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		fetchFeed();
	}, []);

	const fetchFeed = () => {
		dispatch(getFeed({ limit, offset }));
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<ProfilePic size={50} uri={user?.image} border />

				<View style={styles.column}>
					<Text style={styles.user}>Welcome,</Text>
					<Text style={styles.userName}>
						{user?.username ? user.username : 'Guest'}
					</Text>
				</View>
			</View>
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
		</SafeAreaView>
	);
};

export default Home;
