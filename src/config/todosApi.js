import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {kApiUrlEndpoint2} from './WebServices';
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({baseUrl: kApiUrlEndpoint2}),
  endpoints: builder => ({
    getTodos: builder.query({
      query: name => `/todos`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetTodosQuery} = todosApi;
