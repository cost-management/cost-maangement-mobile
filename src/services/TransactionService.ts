import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {PostTransaction, ITransaction} from '../models/Transaction';
import {RequestBody, Response} from '../models/App';
import {BASEURL, TRANSACTIONURL} from '../constants/service';
export const TransactionAPI = createApi({
  reducerPath: 'trasnactionAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
  }),
  tagTypes: ['transactions'],
  endpoints: build => ({
    addTransaction: build.mutation<Response, RequestBody<PostTransaction>>({
      query: ({id, body}) => ({
        url: TRANSACTIONURL,
        headers: {id},
        body,
        method: 'POST',
      }),
    }),
    deleteTransaction: build.mutation<Response, {id: string}>({
      query: ({id}) => ({
        url: TRANSACTIONURL,
        headers: {id},
        body: id,
        method: 'DELETE',
      }),
    }),
    getAllTransactions: build.query<
      ITransaction[],
      {id: string; folder_id: string}
    >({
      query: ({id, folder_id}) => ({
        url: TRANSACTIONURL,
        headers: {id, folder_id},
      }),
    }),
  }),
});
