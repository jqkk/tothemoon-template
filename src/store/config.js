import { combineReducers, configureStore } from '@reduxjs/toolkit';
import analaysisSlice from './slices/analysisSlice';

const rootReducer = combineReducers({
  analysis: analaysisSlice.reducer,
});

export default configureStore({
  reducer: rootReducer,
});
