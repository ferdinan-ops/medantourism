// import { API_KEY } from '../utils/environtment'
import { apiSlice } from './apiSlice'

export const placeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlaces: builder.query({
      query: (keyword) => ({
        url: `/places?latitude=3.5908703751859377&longitude=98.67878532423815&radius=20000&keyword=${keyword}`
      })
    }),
    getPlace: builder.query({
      query: (id) => ({
        url: `/places/details?place_id=${id}`
      })
    }),
    getPlaceDetail: builder.query({
      query: (placeId) => ({
        url: `/place/${placeId}`
      })
    }),
    getDekatPlaces: builder.query({
      query: (query) => ({
        url: `/places?latitude=${query.lat}&longitude=${query.lng}&radius=5000&keyword=${query.keyword}`
      })
    })
  })
})

export const { useGetPlacesQuery, useGetPlaceQuery, useGetPlaceDetailQuery, useGetDekatPlacesQuery } = placeApi
