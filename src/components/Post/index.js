import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { styles } from './styles';
import Text from '@components/Text';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';
import { fontPixel } from '@utils/helper';
import colors from '@constants/colors';
import { navigate } from '@navigator/functions';

export const Post = ({ item = {} }) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<View style={styles.circle}>
					<Image
						style={styles.img}
						source={{ uri: item?.author?.image }}
						resizeMode='contain'
					/>
				</View>
				<View style={styles.column}>
					<Text style={styles.user}>{item?.author?.username}</Text>
					{item?.author?.bio ? <Text>{item.author.bio}</Text> : null}
				</View>
			</View>
			<Text style={styles.title}>{item.title}</Text>
			<Text style={styles.text}>{item.description}</Text>
			<View style={styles.footer}>
				<View
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
				>
					<AntDesign
						name={item?.favorited ? 'heart' : 'hearto'}
						size={fontPixel(15)}
						color={colors.secondary}
					/>
					<Text style={styles.iconText}>{item?.favoritesCount}</Text>
				</View>
				<Pressable
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
					onPress={() => navigate('Login')}
				>
					<Ionicons
						name={'chatbubble-outline'}
						size={fontPixel(17)}
						color={colors.secondary}
					/>
					{/* <Text style={styles.iconText}>{item?.favoritesCount}</Text> */}
				</Pressable>
				<View
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
				>
					<FontAwesome5
						name={'share-square'}
						size={fontPixel(16)}
						color={colors.secondary}
					/>
					{/* <Text style={styles.iconText}>{item?.favoritesCount}</Text> */}
				</View>
				<View
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
				>
					<AntDesign
						name={'retweet'}
						size={fontPixel(18)}
						color={colors.secondary}
					/>
					{/* <Text style={styles.iconText}>{item?.favoritesCount}</Text> */}
				</View>
				<View
					style={{
						...styles.row,
						width: '20%',
						justifyContent: 'center',
					}}
				>
					<AntDesign
						name={'gift'}
						size={fontPixel(17)}
						color={colors.secondary}
					/>
				</View>
			</View>
		</View>
	);
};
