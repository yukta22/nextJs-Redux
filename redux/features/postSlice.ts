import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface PostState {
  id: string;
  image: string;
  video: string;
  description: string;
}

export const postSlice = createSlice({
  name: "post",
  initialState: [] as PostState[],
  reducers: {
    createPost: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        image: action.payload.image,
        video: action.payload.video,
        description: action.payload.desc,
      });
    },
    editPost: (state, action) => {
      console.log(action.payload);
      const { id } = action.payload;
      const index = state.findIndex((ele) => ele.id === id);
      state.splice(index, 1, action.payload);
    },
    deletePost: (state, action) => {
      // const { id } = action.payload;
      const index = state.findIndex((ele) => ele.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { createPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
