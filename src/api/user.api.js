import { apiSlice } from './apiSlice'

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: '/user',
        method: 'GET'
      }),
      providesTags: ['User']
    }),
    uploadPhoto: builder.mutation({
      query: (data) => ({
        url: '/user/profile-picture',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['User']
    }),
    removePhoto: builder.mutation({
      query: () => ({
        url: 'user/profile-picture',
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }),
      invalidatesTags: ['User']
    })
  })
})

export const { useGetUserQuery, useUploadPhotoMutation, useRemovePhotoMutation, useLogoutMutation } = userApi
