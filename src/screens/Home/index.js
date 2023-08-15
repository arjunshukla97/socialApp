import React, { useEffect, useRef } from 'react';
import {
	ActivityIndicator,
	Alert,
	AppState,
	Pressable,
	SafeAreaView,
	View,
} from 'react-native';
import colors from '@constants/colors';
import { getFeed, getNewPosts } from '@redux/action/home';
import { useDispatch, useSelector } from 'react-redux';
import { PostList } from '@components/PostList';
import { styles } from './styles';
import Text from '@components/Text';
import { ProfilePic } from '@components/ProfilePic';
import { reloadPost } from '@redux/reducer/homeSlice';
import { navigationRef } from '@navigator/index';
import { Loader } from '@components/Loader';
import { removeDataOnSecureStore } from '@utils/helper';
import { logoutUser } from '@redux/reducer/authSlice';

const Home = () => {
	const dispatch = useDispatch();
	const { homeLoading, postList, limit, offset, newPostAvailable } =
		useSelector(state => state.home);
	const { user } = useSelector(state => state.auth);
	const appState = useRef(AppState.currentState);

	useEffect(() => {
		fetchFeed();
		const subscription = AppState.addEventListener(
			'change',
			nextAppState => {
				if (
					appState.current.match(/inactive|background/) &&
					nextAppState === 'active' &&
					navigationRef.getCurrentRoute().name === 'Home'
				) {
					console.log('App has come to the foreground!');
					dispatch(getNewPosts({ limit, offset: 0 }));
				}

				appState.current = nextAppState;
				console.log('AppState', appState.current);
			},
		);

		return () => {
			subscription.remove();
		};
	}, []);

	const _loadNewPost = () => {
		dispatch(reloadPost());
		dispatch(getFeed({ limit: 10, offset: 0 }));
	};

	const fetchFeed = () => {
		dispatch(getFeed({ limit, offset }));
	};

	const _logout = () => {
		Alert.alert(
			`Hi ${user?.username}`,
			'Are you sure you want to logout?',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{ text: 'Yes', onPress: () => dispatch(logoutUser()) },
			],
		);
	};

	if (homeLoading) {
		return <Loader />;
	}
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.row}>
				<ProfilePic
					size={50}
					uri={user?.image}
					border
					onPress={_logout}
				/>

				<View style={styles.column}>
					<Text style={styles.user}>Welcome,</Text>
					<Text style={styles.userName}>
						{user?.username ? user.username : 'Guest'}
					</Text>
				</View>
			</View>
			<View style={{ flex: 1 }}>
				{newPostAvailable ? (
					<Pressable
						style={styles.newPostContainer}
						onPress={_loadNewPost}
					>
						<Text style={styles.newPost}>New Posts</Text>
					</Pressable>
				) : null}
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
		</SafeAreaView>
	);
};

export default Home;
