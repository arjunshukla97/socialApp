import colors from '@constants/colors';
import { pixelSizeVertical } from '@utils/helper';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	divider: {
		width: '100%',
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: '4%',
		marginTop: pixelSizeVertical(8),
		justifyContent: 'space-between',
	},
});
