import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { Post } from '@components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getSinglePost } from '@redux/action/home';
import { Loader } from '@components/Loader';
import { Comment } from '@components/Comment';
import { FlashList } from '@shopify/flash-list';
import Text from '@components/Text';
import { Ionicons } from '@expo/vector-icons';
import { heightPixel } from '@utils/helper';
import colors from '@constants/colors';
import { CommentInput } from '@components/CommentInput';

const PostDetails = ({ route }) => {
	const slug = route?.params?.slug || '';
	const dispatch = useDispatch();
	const { singlePost, comments, homeLoading } = useSelector(
		state => state.home,
	);
	const { user } = useSelector(state => state.auth);

	useEffect(() => {
		Promise.all([
			dispatch(getSinglePost(slug)),
			dispatch(getComments({ slug: slug, token: user?.token })),
		]);
	}, [slug, user?.token]);

	const _renderItem = ({ item, index }) => {
		return <Comment item={item} />;
	};
	const _listHeaderComponent = () => {
		return (
			<>
				<Post item={singlePost} />
				<View style={styles.divider}>
					<Text style={styles.comments}>Comments</Text>
					<Text style={styles.comments}>
						Latest{' '}
						<Ionicons
							name='chevron-down'
							size={heightPixel(15)}
							color={colors.text}
						/>
					</Text>
				</View>
			</>
		);
	};

	if (homeLoading) {
		return <Loader />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }}>
				<FlashList
					data={comments}
					renderItem={_renderItem}
					estimatedItemSize={90}
					ListHeaderComponent={_listHeaderComponent}
				/>
			</View>
			<CommentInput slug={slug} />
		</SafeAreaView>
	);
};

export default PostDetails;
