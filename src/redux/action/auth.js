import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../service/auth';

export const login = createAsyncThunk('auth/login', async data => {
	const response = await AuthService.login(data);
	return response.data;
});
