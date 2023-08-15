import React from 'react';
import { Alert, View } from 'react-native';
import { styles } from './styles';
import { ProfilePic } from '@components/ProfilePic';
import Text from '@components/Text';
import { AntDesign } from '@expo/vector-icons';
import colors from '@constants/colors';
import { convertTime, fontPixel, pixelSizeHorizontal } from '@utils/helper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '@redux/action/home';

export const Comment = ({ item = {}, slug = '' }) => {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.auth);

	const _delete = () => {
		Alert.alert(
			`Hi ${user?.username}`,
			'Are you sure, you want to delete this comment?',
			[
				{
					text: 'Cancel',
					onPress: () => console.log('Cancel Pressed'),
					style: 'cancel',
				},
				{
					text: 'Yes',
					onPress: () =>
						dispatch(
							deleteComment({
								slug,
								id: item.id,
								token: user?.token,
							}),
						),
				},
			],
		);
	};
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<ProfilePic size={40} uri={item?.author?.image} />
				<View style={styles.column}>
					<Text style={styles.user}>{item?.author?.username}</Text>
					<Text style={styles.time}>
						{convertTime(item?.updatedAt)}
					</Text>
					<Text>{item?.body} </Text>
					{item?.author?.username === user.username ? (
						<View style={{ ...styles.row, ...styles.row2 }}>
							<Text
								style={styles.delete}
								onPress={() => alert('Feature in progress...')}
							>
								Edit
							</Text>
							<Text
								style={{
									...styles.delete,
									marginLeft: pixelSizeHorizontal(10),
								}}
								onPress={_delete}
							>
								Delete
							</Text>
						</View>
					) : null}
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
