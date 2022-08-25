import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {PatchInvite, PostInvite} from '../models/Invite';
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
    addInvite: build.mutation<{id: string}, {id: string; body: PostInvite}>({
      query: ({id, body}) => {
        console.log(body);
        return {
          url: 'invites',
          method: 'POST',
          body,
          headers: {id},
        };
      },
      invalidatesTags: [{type: 'invites'}],
    }),
    acceptinvite: build.mutation<{id: string}, {id: string; body: PatchInvite}>(
      {
        query: ({id, body}) => {
          return {
            url: 'invites',
            method: 'PATCH',
            body,
            headers: {id},
          };
        },
        invalidatesTags: [{type: 'invites'}],
      },
    ),
  }),
});
