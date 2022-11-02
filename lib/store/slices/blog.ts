import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { BlogState } from '../../models/blog';
import type { Post } from '../../models/post';
import axios from '../../utils/axios';

const initialState: BlogState = {
  posts: [],
  isLoading: false,
};

const slice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

const loadPosts = createAsyncThunk(
  'blog/loadPosts',
  async (payload, thunkAPI) => {
    thunkAPI.dispatch(slice.actions.setLoading(true));
    axios.get('/posts').then((res) => {
      thunkAPI.dispatch(slice.actions.addPost(res.data));
      thunkAPI.dispatch(slice.actions.setLoading(false));
    });
  }
);

export const blogActions = {
  loadPosts,
};

export default slice.reducer;
