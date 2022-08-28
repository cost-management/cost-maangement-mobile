import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFolder} from '../../models/Folder';

interface IFolderState {
  folders: IFolder[];
}

const initialState: IFolderState = {
  folders: [],
};

const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    addFolder: (state: IFolderState, action: PayloadAction<IFolder>) => {
      state.folders = [...state.folders, action.payload];
    },
    refreshFolder: (state: IFolderState, action: PayloadAction<IFolder[]>) => {
      state.folders = action.payload;
    },
    deleteFolder: (state: IFolderState, action: PayloadAction<string>) => {
      state.folders = state.folders.filter(
        folder => folder.id !== action.payload,
      );
    },
    addFolders: (state: IFolderState, action: PayloadAction<IFolder[]>) => {
      state.folders = [...state.folders, ...action.payload];
    },
  },
});

export const {addFolder, refreshFolder, deleteFolder, addFolders} =
  folderSlice.actions;

export default folderSlice.reducer;
