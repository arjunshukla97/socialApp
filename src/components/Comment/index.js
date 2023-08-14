import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ProfilePic } from '@components/ProfilePic';
import Text from '@components/Text';
import { AntDesign } from '@expo/vector-icons';
import colors from '@constants/colors';
import { fontPixel } from '@utils/helper';

export const Comment = ({ item = {} }) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<ProfilePic size={40} uri={item?.author?.image} />
				<View style={styles.column}>
					<Text style={styles.user}>{item?.author?.username}</Text>
					<Text>{item?.body} </Text>
				</View>
				<AntDesign
					name={'hearto'}
					size={fontPixel(15)}
					color={colors.secondary}
					style={{ alignSelf: 'center' }}
				/>
			</View>
		</View>
	);
};
