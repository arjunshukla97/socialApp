import { createSlice } from '@reduxjs/toolkit';
import { login } from '@redux/action/auth';
import { universalGoBack } from '@navigator/functions';
import { removeDataOnSecureStore, setDataOnSecureStore } from '@utils/helper';
import Toast from 'react-native-root-toast';
import colors from '@constants/colors';

const initialState = {
	authLoading: false,
	user: {},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		logoutUser: state => {
			state.user = {};
			removeDataOnSecureStore('user');
			Toast.show('Logged out successfully!', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		},
	},
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.authLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
			setDataOnSecureStore('user', JSON.stringify(action.payload.user));
			state.authLoading = false;
			Toast.show(`Welcome ${action.payload?.user?.username}`, {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
			universalGoBack();
		});
		builder.addCase(login.rejected, state => {
			state.authLoading = false;
		});
	},
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
