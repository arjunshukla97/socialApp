import { StyleSheet } from 'react-native';
import colors from '@constants/colors';
import { heightPixel, fontPixel, pixelSizeVertical } from '@utils/helper';
export default StyleSheet.create({
	linearGradient: {
		height: heightPixel(50),
		width: '92%',
		alignSelf: 'center',
		borderRadius: heightPixel(30),
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: pixelSizeVertical(20),
	},
	buttonText: {
		flex: 1,
		fontSize: fontPixel(16),
		fontWeight: '700',
		textAlign: 'center',
		color: colors.text,
	},
});
