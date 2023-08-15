import colors from '@constants/colors';
import {
	addComment,
	deleteComment,
	getComments,
	getFeed,
	getNewPosts,
	getSinglePost,
} from '@redux/action/home';
import { createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-root-toast';

const initialState = {
	homeLoading: true,
	postList: [],
	limit: 10,
	offset: 0,
	articlesCount: 0,
	singlePost: {},
	comments: [],
	newPostAvailable: false,
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {
		reloadPost: state => {
			state.postList = [];
			state.offset = 0;
			state.newPostAvailable = false;
		},
	},
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
		builder.addCase(getFeed.rejected, state => {
			state.homeLoading = false;
		});
		builder.addCase(getNewPosts.fulfilled, (state, action) => {
			if (state.postList[0]?.slug != action.payload.articles[0].slug) {
				state.newPostAvailable = true;
			}
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
			Toast.show('Comment added successfully!', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		});
		builder.addCase(addComment.rejected, (state, action) => {
			state.homeLoading = false;
			Toast.show('Something went wrong!', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		});
		builder.addCase(deleteComment.fulfilled, (state, action) => {
			state.comments = state.comments?.filter(
				x => x.id != action.payload.id,
			);
			state.homeLoading = false;
			Toast.show('Comment deleted successfully!', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		});
		builder.addCase(deleteComment.rejected, (state, action) => {
			state.homeLoading = false;
			Toast.show('Something went wrong!', {
				duration: Toast.durations.LONG,
				backgroundColor: colors.primary,
			});
		});
	},
});
export const { reloadPost } = homeSlice.actions;
export default homeSlice.reducer;
