import {configureStore} from '@reduxjs/toolkit';
import {FolderAPI} from '../services/FolderService';
import categorySlice from './slices/categorySlice';
import folderSlice from './slices/folderSlice';
import {InviteAPI} from '../services/InviteService';
import inviteSlice from './slices/inviteSlice';
import transactionSlice from './slices/transactionSlice';
import {TransactionAPI} from '../services/TransactionService';

const rootReducer = {
  [FolderAPI.reducerPath]: FolderAPI.reducer,
  [InviteAPI.reducerPath]: InviteAPI.reducer,
  [TransactionAPI.reducerPath]: TransactionAPI.reducer,
  folders: folderSlice,
  categories: categorySlice,
  invites: inviteSlice,
  transactions: transactionSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(FolderAPI.middleware)
      .concat(InviteAPI.middleware)
      .concat(TransactionAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
