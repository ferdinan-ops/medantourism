import { apiSlice } from './apiSlice'

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
        credentials: 'include'
      })
    }),
    sendOTP: builder.mutation({
      query: (body) => ({
        url: '/auth/send-otp',
        method: 'POST',
        body,
        credentials: 'include'
      })
    }),
    verifyOTP: builder.mutation({
      query: (body) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body,
        credentials: 'include'
      }),
      invalidatesTags: ['User']
    }),
    login: builder.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
        credentials: 'include'
      }),
      invalidatesTags: ['User']
    }),
    loginByGoogle: builder.mutation({
      query: (body) => ({
        url: '/auth/login/google',
        method: 'POST',
        body,
        credentials: 'include'
      }),
      invalidatesTags: ['User']
    }),
    sendForgotPasswordOTP: builder.mutation({
      query: (body) => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body,
        credentials: 'include'
      })
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body,
        credentials: 'include'
      })
    })
  })
})

export const {
  useRegisterMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
  useLoginMutation,
  useLoginByGoogleMutation,
  useSendForgotPasswordOTPMutation,
  useResetPasswordMutation
} = authApi
