import { createSlice } from '@reduxjs/toolkit';

const pathState = createSlice({
  name: 'pathState',
  initialState: '',
  reducers: {
    resetPath(state, action) {
      return action.payload;
    },
  },
});

export const { resetPath } = pathState.actions;
export default pathState;
