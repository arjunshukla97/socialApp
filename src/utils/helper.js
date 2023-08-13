import { Dimensions, PixelRatio, StatusBar } from 'react-native';

// Device Height and Width
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
	Dimensions.get('window');

export const DEVICE_HEIGHT = Dimensions.get('screen').height;
export const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const NAVBAR_HEIGHT = DEVICE_HEIGHT - SCREEN_HEIGHT - STATUS_BAR_HEIGHT;

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

function normalize(size, based = 'width') {
	const newSize =
		based === 'height' ? size * heightBaseScale : size * widthBaseScale;
	return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

//for width  pixel
const widthPixel = size => {
	return normalize(size, 'width');
};
//for height  pixel
const heightPixel = size => {
	return normalize(size, 'height');
};
//for font  pixel
const fontPixel = size => {
	return heightPixel(size);
};
//for Margin and Padding vertical pixel
const pixelSizeVertical = size => {
	return heightPixel(size);
};
//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = size => {
	return widthPixel(size);
};
export {
	widthPixel,
	heightPixel,
	fontPixel,
	pixelSizeVertical,
	pixelSizeHorizontal,
};
