import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	homeLoading: true,
};

const homeSlice = createSlice({
	name: 'home',
	initialState,
	reducers: {},
});
// export const {  } = homeSlice.actions;
export default homeSlice.reducer;
