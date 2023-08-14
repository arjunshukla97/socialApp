import { StyleSheet } from 'react-native';
import colors from '@constants/colors';
import { fontPixel, pixelSizeVertical } from '@utils/helper';

export const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: colors.background },
	hi: {
		fontSize: fontPixel(22),
		color: colors.text,
		marginLeft: '5%',
		marginRight: '8%',
		marginTop: pixelSizeVertical(10),
	},
	header: {
		fontSize: fontPixel(22),
		color: colors.text,
		marginLeft: '5%',
		marginRight: '8%',
		marginVertical: pixelSizeVertical(15),
		lineHeight: fontPixel(30),
	},
});
