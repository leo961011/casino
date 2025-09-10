import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './slices/loadingSlice';
import carouselReducer from './slices/carouselSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    carousel: carouselReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
