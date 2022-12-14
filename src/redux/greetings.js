/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable indent */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_ALL = 'message/GET_ALL';
const initialState = [];
export const fetchAllMessages = createAsyncThunk(
	GET_ALL,
	async (all, thunkAPI) => {
		const response = await fetch('http://localhost:3000/api/v1/messages/');
		response.data = await response.json();

		return response.data;
	},
);

const messagesSlice = createSlice({
	name: 'message',
	initialState,
	reducers: {},
	extraReducers: {
		// eslint-disable-next-line arrow-body-style
		[fetchAllMessages.fulfilled]: (state, action) => {
			return action.payload.message;
		},
	},
});

export default messagesSlice.reducer;
