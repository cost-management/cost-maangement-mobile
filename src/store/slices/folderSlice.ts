import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IFolder} from '../../models/Folder';
import calcCurrency from '../../utils/calcCurrency';

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
    changeSum: (
      state,
      action: PayloadAction<{amount: string; folder_id: string}>,
    ) => {
      const amount = calcCurrency(
        action.payload.amount,
        state.folders.find(folder => folder.id === action.payload.folder_id)
          ?.amount!,
      );
      state.folders = state.folders.map(folder => {
        if (folder.id === action.payload.folder_id) {
          return {...folder, amount};
        } else {
          return folder;
        }
      });
    },
  },
});

export const {addFolder, refreshFolder, deleteFolder, addFolders, changeSum} =
  folderSlice.actions;

export default folderSlice.reducer;
