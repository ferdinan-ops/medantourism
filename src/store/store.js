import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from '../api/apiSlice'
import locationReducer from './features/locationSlice'
import authReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,

    location: locationReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware)
})
