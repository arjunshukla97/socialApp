import {
	addComment,
	getComments,
	getFeed,
	getSinglePost,
} from '@redux/action/home';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	homeLoading: true,
	postList: [],
	limit: 10,
	offset: 0,
	articlesCount: 0,
	singlePost: {},
	comments: [],
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
		builder.addCase(getSinglePost.fulfilled, (state, action) => {
			state.singlePost = action.payload.article;
			state.homeLoading = false;
		});
		builder.addCase(getSinglePost.pending, state => {
			state.homeLoading = true;
		});
		builder.addCase(getSinglePost.rejected, state => {
			state.homeLoading = false;
		});
		builder.addCase(getComments.fulfilled, (state, action) => {
			state.comments = action.payload.comments.reverse();
			state.homeLoading = false;
		});
		builder.addCase(getComments.pending, state => {
			state.homeLoading = true;
		});
		builder.addCase(getComments.rejected, state => {
			state.homeLoading = false;
		});
		builder.addCase(addComment.fulfilled, (state, action) => {
			state.comments = [action.payload.comment, ...state.comments];
			state.homeLoading = false;
		});
	},
});
// export const {  } = homeSlice.actions;
export default homeSlice.reducer;
