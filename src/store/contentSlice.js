import { createSlice } from '@reduxjs/toolkit';

const contentState = createSlice({
  name: 'contentState',
  initialState: '',
  reducers: {
    resetPath(state, action) {
      console.log(action.payload);
    },
  },
});

export const { resetPath } = contentState.actions;
export default contentState;
