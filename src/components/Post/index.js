import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import { styles } from './styles';
import Text from '@components/Text';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { fontPixel } from '@utils/helper';
import colors from '@constants/colors';
import { navigate } from '@navigator/functions';
import { useSelector } from 'react-redux';
import { ProfilePic } from '@components/ProfilePic';

export const Post = ({ item = {} }) => {
	const { user } = useSelector(state => state.auth);
	const [readMore, setReadMore] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<ProfilePic size={40} uri={item?.author?.image} />
				<View style={styles.column}>
					<Text style={styles.user}>{item?.author?.username}</Text>
					{item?.author?.bio ? <Text>{item.author.bio}</Text> : null}
				</View>
			</View>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.text}>
				{' '}
				{item?.description?.length < 150
					? item.description
					: readMore
					? item.description
					: item.description?.slice(0, 150)}{' '}
				{!readMore && item?.description?.length > 150 ? (
					<Text
						style={{ ...styles.text, color: colors.primary }}
						onPress={() => setReadMore(true)}
					>
						...Read more
					</Text>
				) : null}
			</Text>
			<View style={styles.footer}>
				<Pressable
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
					onPress={() => (user?.token ? alert(1) : navigate('Login'))}
				>
					<AntDesign
						name={item?.favorited ? 'heart' : 'hearto'}
						size={fontPixel(15)}
						color={colors.secondary}
					/>
					<Text style={styles.iconText}>{item?.favoritesCount}</Text>
				</Pressable>
				<Pressable
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
					onPress={() =>
						user?.token
							? navigate('PostDetails', { slug: item?.slug })
							: navigate('Login')
					}
				>
					<Ionicons
						name={'chatbubble-outline'}
						size={fontPixel(17)}
						color={colors.secondary}
					/>
				</Pressable>
				<Pressable
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
					onPress={() => (user?.token ? alert(1) : navigate('Login'))}
				>
					<FontAwesome5
						name={'share-square'}
						size={fontPixel(16)}
						color={colors.secondary}
					/>
				</Pressable>
				<Pressable
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
					onPress={() => (user?.token ? alert(1) : navigate('Login'))}
				>
					<AntDesign
						name={'retweet'}
						size={fontPixel(18)}
						color={colors.secondary}
					/>
				</Pressable>
				<Pressable
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
					onPress={() => (user?.token ? alert(1) : navigate('Login'))}
				>
					<AntDesign
						name={'gift'}
						size={fontPixel(17)}
						color={colors.secondary}
					/>
				</Pressable>
			</View>
		</View>
	);
};
