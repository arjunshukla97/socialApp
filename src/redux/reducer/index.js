import { combineReducers } from '@reduxjs/toolkit';
import home from './homeSlice';
import auth from './authSlice';

export default combineReducers({
	home,
	auth,
});
