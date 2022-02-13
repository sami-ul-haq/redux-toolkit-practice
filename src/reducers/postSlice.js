import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// name will be like reducer name like [ if reducer name
// is posts & thunk name is getPosts then naem will be posts/getPosts]

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async ({ limit }) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    ).then((res) => res.json());
  }
);

export const getPostById = createAsyncThunk("posts/getPostById", async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  status: null,
  posts: [],
  post: {},
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "success";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state) => {
      state.status = "failed";
    },

    [getPostById.pending]: (state) => {
      state.status = "loading";
    },
    [getPostById.fulfilled]: (state, action) => {
      state.status = "success";
      state.post = action.payload;
    },
    [getPostById.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default postSlice.reducer;
