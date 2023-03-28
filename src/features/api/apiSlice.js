import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query"


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000"
    }),
    endpoints: (builder) => ({
        getVideos: builder.query({

        })
    })
})