import { getFeed } from '@redux/action/home';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	homeLoading: true,
	postList: [],
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	// reducers: {},
	extraReducers: builder => {
		builder.addCase(getFeed.fulfilled, (state, action) => {
			state.postList = action.payload.articles;
			state.homeLoading = false;
		});
	},
});
// export const {  } = homeSlice.actions;
export default homeSlice.reducer;
