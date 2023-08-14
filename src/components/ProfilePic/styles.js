import colors from '@constants/colors';
import { heightPixel, widthPixel } from '@utils/helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	circle: (size, border) => ({
		height: heightPixel(border ? size + 5 : size),
		width: widthPixel(border ? size + 5 : size),
		borderRadius: widthPixel(border ? size + 5 : size) / 2,
		backgroundColor: colors.primary,
		justifyContent: 'center',
		alignItems: 'center',
	}),
	img: size => ({
		height: heightPixel(size),
		width: widthPixel(size),
		borderRadius: widthPixel(size) / 2,
	}),
});
