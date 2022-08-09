import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
export const FolderAPI = createApi({
  reducerPath: 'folderAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://g2kk6o985d.execute-api.eu-central-1.amazonaws.com/test/',
  }),
  endpoints: build => ({
    getAllFolders: build.query({
      query: id => ({url: 'folders', headers: {id}}),
    }),
    addFolder: build.mutation({
      query: (body, id) => ({
        url: 'folders',
        method: 'POST',
        body,
        headers: {id},
      }),
    }),
  }),
});
