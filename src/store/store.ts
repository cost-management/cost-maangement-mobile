import {configureStore} from '@reduxjs/toolkit';
import {FolderAPI} from '../services/FolderService';
import folderSlice from './slices/folderSlice';

const rootReducer = {
  [FolderAPI.reducerPath]: FolderAPI.reducer,
  folders: folderSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(FolderAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
