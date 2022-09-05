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
    changeSum: (
      state,
      action: PayloadAction<{nanos: string; units: string; folder_id: string}>,
    ) => {
      let nanos: any = parseInt(action.payload.nanos, 10) || 0;
      if (nanos < 10) {
        nanos *= 10;
      }
      let units: any = parseInt(action.payload.units, 10);
      const isLessThanZero = units < 0;

      state.folders = state.folders.map(folder => {
        if (folder.id !== action.payload.folder_id) {
          return folder;
        } else {
          const currentNanos =
            parseInt(folder?.nanos!, 10) < 10
              ? parseInt(folder?.nanos!, 10) * 10
              : parseInt(folder?.nanos!, 10);
          if (!isLessThanZero) {
            nanos += currentNanos;

            if (nanos >= 100) {
              units++;
              nanos -= 100;
            }

            units += parseInt(folder?.units!, 10);
          } else {
            if (nanos !== 0) {
              nanos -= currentNanos;
              if (nanos > 0) {
                units--;
                nanos = 100 - nanos;
              }
            }
            units += parseInt(folder?.units!, 10);
          }
          nanos.toFixed(2);
          nanos = nanos < 10 ? `0${nanos}` : nanos.toString();
          units = units.toString();
          return {...folder, nanos, units: units};
        }
      });
    },
  },
});

export const {addFolder, refreshFolder, deleteFolder, addFolders, changeSum} =
  folderSlice.actions;

export default folderSlice.reducer;
