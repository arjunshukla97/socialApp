import { getFeed } from '@redux/action/home';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	homeLoading: true,
	postList: [],
	limit: 10,
	offset: 0,
	articlesCount: 0,
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	// reducers: {},
	extraReducers: builder => {
		builder.addCase(getFeed.fulfilled, (state, action) => {
			state.articlesCount = action.payload.articlesCount;
			// if posts length is less than articleCount we don't need to increase the offset.
			if (state.postList?.length < action.payload.articlesCount) {
				state.postList = [
					...state.postList,
					...action.payload.articles,
				];
				state.offset = state.offset + 1;
			}
			state.homeLoading = false;
		});
	},
});
// export const {  } = homeSlice.actions;
export default homeSlice.reducer;
