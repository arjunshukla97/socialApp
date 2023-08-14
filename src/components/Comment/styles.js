import colors from '@constants/colors';
import {
	fontPixel,
	pixelSizeHorizontal,
	pixelSizeVertical,
} from '@utils/helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		width: '94%',
		alignSelf: 'center',
		backgroundColor: colors.theme,
		borderRadius: pixelSizeVertical(10),
		paddingVertical: pixelSizeVertical(20),
		marginTop: pixelSizeVertical(8),
	},
	row: {
		flexDirection: 'row',
		width: '92%',
		alignSelf: 'center',
	},
	column: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: pixelSizeHorizontal(15),
	},
	user: {
		fontSize: fontPixel(15),
		fontWeight: '700',
	},
	bio: {
		fontSize: fontPixel(13.5),
		fontWeight: '400',
		color: colors.secondary,
		marginTop: pixelSizeVertical(2),
	},
});
