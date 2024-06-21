import {API_BASE} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {Contact} from './types';

export const listApi = createApi({
  reducerPath: 'listApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }),
  endpoints: builder => ({
    getList: builder.query<Contact[], undefined>({
      query: () => ({method: 'get', url: '/elements'}),
    }),
  }),
});

export const {useGetListQuery} = listApi;
