import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import Text from '@components/Text';
import colors from '@constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { fontPixel, pixelSizeHorizontal } from '@utils/helper';

export const Input = ({
	value,
	onChangeText,
	label,
	isSecure,
	...otherProps
}) => {
	const [secure, setSecure] = useState(true);

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<View style={styles.inputBody}>
				<TextInput
					value={value}
					style={styles.input}
					onChangeText={onChangeText}
					cursorColor={colors.primary}
					autoCorrect={false}
					secureTextEntry={isSecure ? secure : false}
					placeholderTextColor={colors.secondary}
					{...otherProps}
				/>
				{isSecure ? (
					<Ionicons
						name={secure ? 'eye-off' : 'eye'}
						size={fontPixel(18)}
						onPress={() => setSecure(!secure)}
						style={{ marginLeft: pixelSizeHorizontal(10) }}
						color={colors.secondary}
					/>
				) : null}
			</View>
		</View>
	);
};
