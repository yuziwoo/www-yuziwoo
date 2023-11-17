import { createSlice } from "@reduxjs/toolkit";

const contentState = createSlice({
  name: 'contentState',
  initialState: {},
  reducers: {
    reset(state, action) {
      return action.payload;
    },
  },
});

export const { reset } = contentState.actions;
export default contentState;