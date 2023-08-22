import { configureStore } from '@reduxjs/toolkit';
import {mainReducer} from './mainReducer';

export const store = configureStore({
  reducer: {
    mainReducer,
  },
});