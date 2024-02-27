import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload
    },
    setUser: (state, { payload }) => {
      state.user = payload
    },
    setLogout: (state) => {
      state.user = null
      state.token = null
    },
    setIsLoading: (state, { payload }) => {
      state.loading = payload
    },
    setError: (state, { payload }) => {
      state.error = payload
    }
  }
})

export const { setLogout, setToken, setIsLoading, setError, setUser } = authSlice.actions
export default authSlice.reducer
