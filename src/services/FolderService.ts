import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {IFolder, PostFolder} from '../models/Folder';
export const FolderAPI = createApi({
  reducerPath: 'folderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://g2kk6o985d.execute-api.eu-central-1.amazonaws.com/test/',
  }),
  tagTypes: ['folders'],
  endpoints: build => ({
    getAllFolders: build.query<IFolder[], string>({
      query: id => ({url: 'folders', headers: {id}}),
      providesTags: [{type: 'folders'}],
    }),
    addFolder: build.mutation<{id: string}, {id: string; body: PostFolder}>({
      query: ({body, id}) => {
        console.log(body);
        return {
          url: 'folders',
          method: 'POST',
          body,
          headers: {id},
        };
      },
      invalidatesTags: [{type: 'folders'}],
    }),
    deleteFolder: build.mutation<{id: string}, {id: string; folderId: string}>({
      query: ({id, folderId}) => {
        return {
          url: 'folders',
          method: 'DELETE',
          body: {id: folderId},
          headers: {id},
        };
      },
      invalidatesTags: [{type: 'folders'}],
    }),
  }),
});
