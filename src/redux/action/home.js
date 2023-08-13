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
