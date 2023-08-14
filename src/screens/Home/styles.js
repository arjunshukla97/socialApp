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
		flex: 1,
		backgroundColor: colors.background,
	},
	row: {
		flexDirection: 'row',
		width: '92%',
		alignSelf: 'center',
		marginBottom: pixelSizeVertical(10),
	},
	circle: {
		height: heightPixel(57),
		width: widthPixel(57),
		borderRadius: widthPixel(57) / 2,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	},
	img: {
		height: heightPixel(50),
		width: widthPixel(50),
		borderRadius: widthPixel(50) / 2,
	},
	column: {
		justifyContent: 'center',
		marginLeft: pixelSizeHorizontal(15),
	},
	user: {
		fontSize: fontPixel(13),
		fontWeight: '500',
	},
	userName: {
		fontSize: fontPixel(20),
		fontWeight: '700',
	},
	newPostContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		borderRadius: fontPixel(25),
		backgroundColor: colors.primary,
		zIndex: 1,
		alignSelf: 'center',
		shadowColor: colors.secondary,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.5,
		shadowRadius: 3.84,
		elevation: 5,
		marginTop: pixelSizeVertical(10),
	},
	newPost: {
		fontWeight: '700',
		marginHorizontal: pixelSizeHorizontal(15),
		marginVertical: pixelSizeVertical(4),
	},
});
