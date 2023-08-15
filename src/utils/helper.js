import { Dimensions, PixelRatio, StatusBar } from 'react-native';
import * as SecureStore from 'expo-secure-store';

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

export const setDataOnSecureStore = async (key, value) => {
	await SecureStore.setItemAsync(key, value);
};

export const removeDataOnSecureStore = async key => {
	await SecureStore.deleteItemAsync(key);
};

export const getDataFromSecureStore = async key => {
	let result = await SecureStore.getItemAsync(key);
	if (result) {
		return result;
	} else {
		return null;
	}
};

export const convertTime = date => {
	let currentDate = new Date();
	let startDate = new Date(date);
	// console.log('date is',startDate,currentDate)
	let ms = Math.abs(currentDate - startDate);
	// console.log('diff=>',ms)
	let seconds = Math.round(ms / 1000);
	let minutes = Math.round(ms / (1000 * 60));
	let hours = Math.round(ms / (1000 * 60 * 60));
	let days = Math.round(ms / (1000 * 60 * 60 * 24));
	let month = Math.round(ms / (1000 * 60 * 60 * 24 * 30));
	let year = Math.round(ms / (1000 * 60 * 60 * 24 * 30 * 12));
	if (seconds < 60) return seconds + 's ago';
	else if (minutes < 60) return minutes + 'min ago';
	else if (hours < 24) return hours + 'h ago';
	else if (days < 31) return days + 'd ago';
	else if (month < 12) return month + 'M ago';
	else return year + 'y ago';
};
