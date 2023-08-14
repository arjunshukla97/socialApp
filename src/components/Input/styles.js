import colors from '@constants/colors';
import {
	fontPixel,
	heightPixel,
	pixelSizeHorizontal,
	pixelSizeVertical,
} from '@utils/helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '92%',
		alignSelf: 'center',
		marginTop: pixelSizeVertical(10),
	},
	label: {
		fontSize: fontPixel(17),
		color: colors.text,
		marginLeft: pixelSizeHorizontal(15),
		fontWeight: '500',
	},
	inputBody: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: heightPixel(50),
		backgroundColor: colors.third,
		borderRadius: heightPixel(30),
		marginTop: pixelSizeVertical(10),
		paddingHorizontal: pixelSizeHorizontal(20),
	},
	input: {
		flex: 1,
		height: '100%',
		color: colors.text,
	},
});
