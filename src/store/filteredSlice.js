import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	comments: [],
	isLoading: false,
	error: null,
};

export const requestComments = createAsyncThunk(
	"filtered/requestComments",
	async () => {
		const response = await axios.get(
			"https://jsonplaceholder.typicode.com/comments"
		);
		return response.data;
	}
);

const filteredSlice = createSlice({
	name: "filtered",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(requestComments.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(requestComments.fulfilled, (state, action) => {
				state.comments = action.payload;
				state.error = null;
				state.isLoading = false;
			})
			.addCase(requestComments.rejected, (state, action) => {
				state.error = action.error.message;
				state.isLoading = false;
			});
	},
});

export default filteredSlice.reducer;
