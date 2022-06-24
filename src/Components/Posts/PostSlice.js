import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("thunk/posts", async () => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return resp.data;
  } catch (err) {
    return err.message;
  }
});

const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "Pending";
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.status = "Fullfilled";
      state.posts = state.posts.concat(action.payload);
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = "Rejected";
      state.error = action.error.message;
    });
  },
});

export const allPosts = (state) => state.posts.posts;
export const status = (state) => state.posts.status;
export const error = (state) => state.posts.error;

export default PostSlice.reducer;
