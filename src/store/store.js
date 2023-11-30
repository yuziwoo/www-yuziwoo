import { configureStore } from '@reduxjs/toolkit';
import pathState from './pathSlice';

export default configureStore({
  reducer: {
    pathState: pathState.reducer,
  },
});
