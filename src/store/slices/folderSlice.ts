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
    addFolder: (state: IFolderState, action: PayloadAction<any>) => {
      state.folders = [...state.folders, action.payload];
    },
    refreshFolder: (state: IFolderState, action: PayloadAction<any[]>) => {
      state.folders = action.payload;
    },
  },
});

export const {addFolder, refreshFolder} = folderSlice.actions;

export default folderSlice.reducer;
