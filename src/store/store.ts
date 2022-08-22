import {configureStore} from '@reduxjs/toolkit';
import {FolderAPI} from '../services/FolderService';
import categorySlice from './slices/categorySlice';
import folderSlice from './slices/folderSlice';

const rootReducer = {
  [FolderAPI.reducerPath]: FolderAPI.reducer,
  folders: folderSlice,
  categories: categorySlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(FolderAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
