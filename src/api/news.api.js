import { createEntityAdapter } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'

export const eventAdapter = createEntityAdapter({
  selectId: (item) => item.id
})

export const newsAdapter = createEntityAdapter({
  selectId: (item) => item.id
})

export const eventSelector = eventAdapter.getSelectors()
export const newsSelector = eventAdapter.getSelectors()

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    searchEvents: builder.query({
      query: ({ keyword, page }) => ({
        url: `/event-news?type=event&page=${page}&keyword=${keyword}`
      }),
      transformResponse: (response) => {
        return eventAdapter.addMany(eventAdapter.getInitialState(), response.data)
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs?.keyword}`
      },
      merge: (currentState, incomingState) => {
        eventAdapter.addMany(currentState, eventSelector.selectAll(incomingState))
      }
    }),
    searchNews: builder.query({
      query: ({ keyword, page }) => ({
        url: `/event-news?type=news&page=${page}&keyword=${keyword}`
      }),
      transformResponse: (response) => {
        return newsAdapter.addMany(newsAdapter.getInitialState(), response.data)
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs?.keyword}`
      },
      merge: (currentState, incomingState) => {
        newsAdapter.addMany(currentState, newsSelector.selectAll(incomingState))
      }
    }),
    getNewsOrEventDetail: builder.query({
      query: (slug) => ({
        url: `/event-news/${slug}`
      }),
      transformResponse: (response) => {
        return response.data
      }
    })
  })
})

export const { useGetNewsOrEventDetailQuery, useSearchEventsQuery, useSearchNewsQuery } = newsApi
