import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Post } from '@components/Post';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePost } from '@redux/action/home';
import { Loader } from '@components/Loader';

const PostDetails = ({ route }) => {
	const slug = route?.params?.slug || '';
	const dispatch = useDispatch();
	const { singlePost, homeLoading } = useSelector(state => state.home);

	useEffect(() => {
		dispatch(getSinglePost(slug));
	}, [slug]);

	if (homeLoading) {
		return <Loader />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<Post item={singlePost} />
		</SafeAreaView>
	);
};

export default PostDetails;
