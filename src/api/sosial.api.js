import { FACEBOOK_ACCESS_TOKEN } from '../utils/environtment'
import { apiSlice } from './apiSlice'

export const sosialApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFacebookPosts: builder.query({
      query: () => ({
        url: `https://graph.facebook.com/948971681828395/posts?fields=created_time,message,id,permalink_url,attachments&access_token=${FACEBOOK_ACCESS_TOKEN}`
      }),
      transformResponse: (response) => {
        return response.data.slice(0, 6)
      }
    }),
    getInstagramPosts: builder.query({
      query: () => ({
        url: `https://graph.facebook.com/17841405710431080/media?fields=id,caption,permalink,timestamp,thumbnail_url&access_token=${FACEBOOK_ACCESS_TOKEN}`
      }),
      transformResponse: (response) => {
        const filteredResponse = response.data.filter((item) => item.thumbnail_url)
        const data = filteredResponse
          .map((item) => ({
            id: item.id,
            message: item.caption,
            permalink_url: item.permalink,
            created_time: item.timestamp,
            thumbnail_url: item.thumbnail_url
          }))
          .slice(0, 6)

        return data
      }
    })
  })
})

export const { useGetFacebookPostsQuery, useGetInstagramPostsQuery } = sosialApi
