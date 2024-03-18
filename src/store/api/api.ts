import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IVideo, IVideosRes, IVideosResNormalized, NormalizedVideoItems } from 'types/interfaces'

function normalizeData(items: IVideo[]): NormalizedVideoItems {
	const normalizedData: NormalizedVideoItems = {}
	items.forEach((item) => {
		const videoId = item.id.videoId
		normalizedData[videoId] = item
	})
	return normalizedData
}

export const movieApi = createApi({
	reducerPath: 'movies',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: (builder) => ({
		getVideos: builder.query<
			IVideosResNormalized,
			{ title?: string; category?: string; pageToken?: string }
		>({
			query: ({ category, title = '', pageToken }) => ({
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

			transformResponse(response: IVideosRes): IVideosResNormalized {
				const normalizedData = normalizeData(response.items)
				return { ...response, items: normalizedData }
			},
			serializeQueryArgs: ({ queryArgs: { category, title } }) => {
				return `${category ? category : '25'}-${title}`
			},
			merge: (currentCache, newItems) => {
				if (currentCache.nextPageToken !== newItems.nextPageToken) {
					currentCache.items = { ...currentCache.items, ...newItems.items }
					currentCache.nextPageToken = newItems.nextPageToken
				} else return newItems
			},
			forceRefetch({ currentArg, previousArg }) {
				return currentArg?.pageToken !== previousArg?.pageToken
			},
		}),
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
