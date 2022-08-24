import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
export const InviteAPI = createApi({
  reducerPath: 'inviteAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://g2kk6o985d.execute-api.eu-central-1.amazonaws.com/test/',
  }),
  tagTypes: ['invites'],
  endpoints: build => ({
    getInvites: build.query({
      query: id => ({url: 'invites', headers: {id}}),
      providesTags: [{type: 'invites'}],
    }),
    addInvite: build.mutation({
      query: ({id, folder}) => ({
        url: 'invites',
        method: 'POST',
        body: folder,
        headers: {id},
      }),
    }),
    acceptinvite: build.mutation({
      query: ({id, folder}) => ({
        url: 'invites',
        method: 'PATCH',
        body: folder,
        headers: {id},
      }),
    }),
  }),
});
