import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { fontPixel, pixelSizeHorizontal } from '@utils/helper';
import colors from '@constants/colors';
import { Input } from '@components/Input';
import { ProfilePic } from '@components/ProfilePic';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '@redux/action/home';

export const CommentInput = ({ slug = '' }) => {
	const dispatch = useDispatch();
	const [text, setText] = useState('');
	const { user } = useSelector(state => state.auth);

	const _addComment = () => {
		const data = {
			comment: {
				body: text,
			},
		};
		dispatch(addComment({ slug, data, token: user?.token }));
		setText('');
	};

	return (
		<Input
			value={text}
			onChangeText={setText}
			containerStyle={styles.containerInput}
			maxLength={250}
			placeholder={'Write a comment ...'}
			RightComponent={() => (
				<ProfilePic
					size={30}
					style={{
						marginRight: pixelSizeHorizontal(15),
						marginLeft: -pixelSizeHorizontal(10),
					}}
					uri={user?.image}
				/>
			)}
			LeftComponent={() => (
				<Ionicons
					name={'send'}
					size={fontPixel(18)}
					onPress={_addComment}
					style={{ marginLeft: pixelSizeHorizontal(10) }}
					color={colors.secondary}
				/>
			)}
		/>
	);
};
