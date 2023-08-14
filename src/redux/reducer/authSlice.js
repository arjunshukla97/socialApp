import { createSlice } from '@reduxjs/toolkit';
import { login } from '@redux/action/auth';
import { universalGoBack } from '@navigator/functions';
import { setDataOnSecureStore } from '@utils/helper';

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
	},
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.authLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
			setDataOnSecureStore('user', JSON.stringify(action.payload.user));
			state.authLoading = false;
			universalGoBack();
		});
		builder.addCase(login.rejected, state => {
			state.authLoading = false;
		});
	},
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
