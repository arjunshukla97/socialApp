import React from 'react';
import { View } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { Post } from '@components/Post';

export const PostList = ({ data = [] }) => {
	const _renderItem = ({ item, index }) => {
		return <Post item={item} />;
	};
	return (
		<View style={{ flex: 1 }}>
			<FlashList data={data} renderItem={_renderItem} />
		</View>
	);
};
