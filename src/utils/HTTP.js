import colors from '@constants/colors';
import axios from 'axios';
import Toast from 'react-native-root-toast';

const HTTP = axios.create();
HTTP.interceptors.request.use(
	config => config,
	error => {
		return Promise.reject(error);
	},
);

HTTP.interceptors.response.use(
	response => {
		console.log('RESPONSE ------------------>>>>>>>>>>>>>>>>>>', response);
		return response;
	},
	error => {
		if (error.response) {
			const { status, data } = error.response;
			console.log(
				'RESPONSE ERROR  ------------------>>>>>>>>>>>>>>>>>>',
				error,
			);
			if (status === 400) {
				Toast.show('The request was not valid', {
					duration: Toast.durations.LONG,
					backgroundColor: colors.primary,
				});
			} else if (status === 401) {
				Toast.show('You are not authorized to perform this action.', {
					duration: Toast.durations.LONG,
					backgroundColor: colors.primary,
				});
			}
			if (status === 403) {
				Toast.show('The request was not valid', {
					duration: Toast.durations.LONG,
					backgroundColor: colors.primary,
				});
			} else if (status === 404) {
				Toast.show('The requested resource was not found.', {
					duration: Toast.durations.LONG,
					backgroundColor: colors.primary,
				});
			} else if (status >= 500) {
				Toast.show('An unexpected error occurred on the server.', {
					duration: Toast.durations.LONG,
					backgroundColor: colors.primary,
				});
			} else {
				Toast.show(data?.message || 'An error occurred.', {
					duration: Toast.durations.LONG,
					backgroundColor: colors.primary,
				});
			}
		} else if (error.request) {
			console.log(error);
			Toast.show('Unable to connect to the server.', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		} else {
			Toast.show(error.message || 'An error occurred.', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		}
		return Promise.reject(error);
	},
);
export default HTTP;
