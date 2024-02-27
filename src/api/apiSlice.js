import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setLogout } from '../store/features/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { PROD_API_URI } from '../utils/environtment'
import { googleLogout } from '../utils/GoogleLogin'

const baseQuery = fetchBaseQuery({
  baseUrl: PROD_API_URI,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.originalStatus === 403) {
    const state = api.getState()
    const userInfo = state.auth.user
    if (userInfo?.email) await googleLogout()
    await AsyncStorage.setItem('token', '')
    await AsyncStorage.setItem('userInfo', '')
    api.dispatch(setLogout())
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ['User'],
  endpoints: (builder) => ({})
})
