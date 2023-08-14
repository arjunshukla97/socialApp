import colors from '@constants/colors';
import {
	fontPixel,
	heightPixel,
	pixelSizeHorizontal,
	pixelSizeVertical,
	widthPixel,
} from '@utils/helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '94%',
		alignSelf: 'center',
		backgroundColor: colors.theme,
		borderRadius: pixelSizeVertical(10),
		paddingTop: pixelSizeVertical(15),
		marginTop: pixelSizeVertical(15),
	},
	row: { flexDirection: 'row', width: '92%', alignSelf: 'center' },
	circle: {
		height: heightPixel(40),
		width: widthPixel(40),
		borderRadius: widthPixel(40) / 2,
		backgroundColor: colors.theme,
		borderColor: colors.theme,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
	},
	img: {
		height: heightPixel(40),
		width: widthPixel(40),
		borderRadius: widthPixel(40) / 2,
	},
	column: {
		justifyContent: 'center',
		marginLeft: pixelSizeHorizontal(15),
	},
	user: {
		fontSize: fontPixel(15),
		fontWeight: '500',
	},
	time: {
		fontSize: fontPixel(12),
		fontWeight: '500',
		color: colors.secondary,
		marginTop: pixelSizeVertical(3),
	},
	bio: {
		fontSize: fontPixel(13.5),
		fontWeight: '400',
		color: colors.secondary,
		marginTop: pixelSizeVertical(2),
	},
	title: {
		width: '92%',
		alignSelf: 'center',
		fontSize: fontPixel(15),
		color: colors.primary,
		fontWeight: '700',
		marginTop: pixelSizeVertical(10),
	},
	text: {
		width: '92%',
		alignSelf: 'center',
		fontSize: fontPixel(15),
		marginTop: pixelSizeVertical(10),
	},
	iconText: {
		fontSize: fontPixel(14),
		color: colors.secondary,
		marginLeft: pixelSizeHorizontal(5),
	},
	footer: {
		flexDirection: 'row',
		alignSelf: 'center',
		height: heightPixel(40),
		marginTop: pixelSizeVertical(5),
	},
});
