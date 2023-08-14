import { createAsyncThunk } from '@reduxjs/toolkit';
import HomeService from '../service/home';

export const getFeed = createAsyncThunk(
	'home/getFeed',
	async ({ limit, offset }) => {
		const response = await HomeService.getFeed(limit, offset);
		console.log('getFeed => ', response.data);
		return response.data;
	},
);

export const getNewPosts = createAsyncThunk(
	'home/getNewPosts',
	async ({ limit, offset }) => {
		const response = await HomeService.getFeed(limit, offset);
		console.log('getNewPosts => ', response.data);
		return response.data;
	},
);

export const getSinglePost = createAsyncThunk(
	'home/getSinglePost',
	async slug => {
		const response = await HomeService.getSinglePost(slug);
		console.log('getSinglePost => ', response.data);
		return response.data;
	},
);

export const getComments = createAsyncThunk(
	'home/getComments',
	async ({ slug, token }) => {
		const response = await HomeService.getComments(slug, token);
		console.log('getComments => ', response.data);
		return response.data;
	},
);

export const addComment = createAsyncThunk(
	'home/addComment',
	async ({ slug, data, token }) => {
		const response = await HomeService.addComment(slug, data, token);
		console.log('addComment => ', response.data);
		return response.data;
	},
);

export const deleteComment = createAsyncThunk(
	'home/deleteComment',
	async ({ slug, id, token }) => {
		const response = await HomeService.deleteComment(slug, id, token);
		console.log('deleteComment => ', response.data);
		return { response: response.data, id: id };
	},
);
