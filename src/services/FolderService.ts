import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
export const FolderAPI = createApi({
  reducerPath: 'folderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://g2kk6o985d.execute-api.eu-central-1.amazonaws.com/test/',
  }),
  tagTypes: ['folders'],
  endpoints: build => ({
    getAllFolders: build.query({
      query: id => ({url: 'folders', headers: {id}}),
      providesTags: [{type: 'folders'}],
    }),
    addFolder: build.mutation({
      query: ({body, id}) => {
        return {
          url: 'folders',
          method: 'POST',
          body,
          headers: {id},
        };
      },
      invalidatesTags: [{type: 'folders'}],
    }),
    deleteFolder: build.mutation({
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
