import { createAsyncThunk } from '@reduxjs/toolkit';
import HomeService from '../service/home';

export const getFeed = createAsyncThunk('home/getFeed', async () => {
	const response = await HomeService.getFeed();
	console.log('getFeed => ', response.data);
	return response;
});
