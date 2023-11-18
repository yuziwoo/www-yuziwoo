import { configureStore } from '@reduxjs/toolkit';
import contentState from './contentSlice';

export default configureStore({
  reducer: {
    contentState: contentState.reducer,
  },
});
