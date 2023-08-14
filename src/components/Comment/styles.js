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
	time: {
		fontSize: fontPixel(12),
		fontWeight: '500',
		color: colors.secondary,
		marginVertical: pixelSizeVertical(3),
	},
	row2: {
		marginTop: pixelSizeVertical(8),
		width: '100%',
	},
	delete: {
		fontSize: fontPixel(14),
		color: colors.secondary,
	},
});
