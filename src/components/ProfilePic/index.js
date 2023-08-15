import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { styles } from './styles';
import { PLACEHOLDER_IMAGE } from '@constants/index';

export const ProfilePic = ({
	uri = '',
	size = 50,
	border = false,
	style = {},
	onPress,
}) => {
	return (
		<Pressable
			disabled={onPress ? false : true}
			onPress={onPress}
			style={{ ...styles.circle(size, border), ...style }}
		>
			<Image
				style={styles.img(size)}
				source={{
					uri: uri ? uri : PLACEHOLDER_IMAGE,
				}}
				resizeMode='contain'
			/>
		</Pressable>
	);
};
