import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {PostTransaction} from '../models/Transaction';
const TransactionAPI = createApi({
  reducerPath: 'trasnactionAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://g2kk6o985d.execute-api.eu-central-1.amazonaws.com/test/',
  }),
  tagTypes: ['transactions'],
  endpoints: build => ({
    addTransaction: build.mutation<
      {id: string},
      {id: string; body: PostTransaction}
    >({
      query: ({id, body}) => ({
        url: 'incomes',
        headers: {id},
        body,
        method: 'POST',
      }),
    }),
  }),
});
