import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFolder, GetFolder} from '../../models/Folder';

interface IFolderState {
  folders: GetFolder[];
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
    refreshFolder: (
      state: IFolderState,
      action: PayloadAction<GetFolder[]>,
    ) => {
      state.folders = action.payload;
    },
  },
});

export const {addFolder, refreshFolder} = folderSlice.actions;

export default folderSlice.reducer;
