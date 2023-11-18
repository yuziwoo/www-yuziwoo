import { createSlice } from "@reduxjs/toolkit";

const contentState = createSlice({
  name: "contentState",
  initialState: {
    path: "",
  },
  reducers: {
    resetPath(state, action) {
      const path = `${action.payload}`;
      state.path = "path";
      console.log(action.payload, state.path);
    },
  },
});

export const { resetPath } = contentState.actions;
export default contentState;
