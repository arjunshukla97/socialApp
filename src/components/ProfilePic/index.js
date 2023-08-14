import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import { PLACEHOLDER_IMAGE } from '@constants/index';

export const ProfilePic = ({ uri = '', size = 50, border = false, style }) => {
	return (
		<View style={{ ...styles.circle(size, border), ...style }}>
			<Image
				style={styles.img(size)}
				source={{
					uri: uri ? uri : PLACEHOLDER_IMAGE,
				}}
				resizeMode='contain'
			/>
		</View>
	);
};
