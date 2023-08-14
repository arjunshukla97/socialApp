import { createSlice } from '@reduxjs/toolkit';
import { login } from '@redux/action/auth';
import { universalGoBack } from '@navigator/functions';

const initialState = {
	authLoading: false,
	user: {},
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder.addCase(login.pending, state => {
			state.authLoading = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			state.user = action.payload.user;
			state.authLoading = false;
			universalGoBack();
		});
		builder.addCase(login.rejected, state => {
			state.authLoading = false;
		});
	},
});
export default authSlice.reducer;
