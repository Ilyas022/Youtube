import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IVideosRes } from 'types/interfaces'

export const movieApi = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: (builder) => ({
		getVideos: builder.query<IVideosRes, { title?: string; category?: string; pageToken?: string }>(
			{
				query: ({ category, title, pageToken }) => ({
					url: process.env.API_URL as string,
					params: {
						key: process.env.API_KEY as string,
						q: title || '',
						part: 'snippet',
						type: 'video',
						videoEmbeddable: true,
						maxResults: 16,
						pageToken: pageToken || '',
						videoDuration: 'medium',
						videoCategoryId: category || '25',
						regionCode: 'BY',
					},
				}),
				serializeQueryArgs: ({ queryArgs: { category, title } }) => {
					return `${category}-${title}`
				},
				merge: (currentCache, newItems) => {
					if (currentCache.nextPageToken !== newItems.nextPageToken) {
						newItems.items.forEach((newVideo) => {
							if (!currentCache.items.find((video) => video.id.videoId === newVideo.id.videoId)) {
								currentCache.items.push(newVideo)
							}
						})
						currentCache.nextPageToken = newItems.nextPageToken
					} else return newItems
				},
				forceRefetch({ currentArg, previousArg }) {
					return currentArg?.pageToken !== previousArg?.pageToken
				},
			}
		),
		getVideoSuggestions: builder.query<string[], unknown>({
			query: (title) => ({
				url: process.env.API_SUGGESTIONS_URL as string,
				headers: {
					'X-RapidAPI-Key': process.env.API_SUGGESTIONS_KEY as string,
					'X-RapidAPI-Host': process.env.API_SUGGESTIONS_HOST as string,
				},
				params: {
					query: title || '',
				},
			}),
		}),
	}),
})

export const { useGetVideosQuery, useGetVideoSuggestionsQuery } = movieApi
