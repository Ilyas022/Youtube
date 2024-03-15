import { renderWithProviders } from 'utils/testWrapper'
import fetch from 'jest-fetch-mock'
import FilmCards from '.'
import { fireEvent, waitFor } from '@testing-library/react'
import { IVideosRes } from 'types/interfaces'

const mockResponse: IVideosRes = {
	kind: 'item',
	etag: '123',
	items: [
		{
			kind: 'ivedio',
			etag: '45',
			id: {
				kind: '123',
				videoId: 'videoid',
			},
			snippet: {
				publishedAt: 'string',
				channelId: 'string',
				title: 'test title',
				description: 'string',
				thumbnails: {
					default: {
						url: 'string',
						width: 123,
						height: 123,
					},
					medium: { url: 'string', width: 123, height: 123 },
					high: {
						url: 'string',
						width: 123,
						height: 123,
					},
				},
				channelTitle: 'string',
				liveBroadcastContent: 'string',
				publishTime: 'string',
			},
		},
	],
	nextPageToken: '1',
	prevPageToken: '0',
}

const mockResponsedouble: IVideosRes = {
	kind: 'item',
	etag: '123',
	items: [
		{
			kind: 'ivedio343443',
			etag: '45',
			id: {
				kind: '123',
				videoId: 'videoid',
			},
			snippet: {
				publishedAt: 'string',
				channelId: 'string',
				title: 'test title',
				description: 'string',
				thumbnails: {
					default: {
						url: 'string',
						width: 123,
						height: 123,
					},
					medium: { url: 'string', width: 123, height: 123 },
					high: {
						url: 'string',
						width: 123,
						height: 123,
					},
				},
				channelTitle: 'string',
				liveBroadcastContent: 'string',
				publishTime: 'string',
			},
		},
		{
			kind: 'ivedio',
			etag: '45',
			id: {
				kind: '1233',
				videoId: 'videoid1',
			},
			snippet: {
				publishedAt: 'string',
				channelId: 'string',
				title: 'test title',
				description: 'string',
				thumbnails: {
					default: {
						url: 'string',
						width: 123,
						height: 123,
					},
					medium: { url: 'string', width: 123, height: 123 },
					high: {
						url: 'string',
						width: 123,
						height: 123,
					},
				},
				channelTitle: 'string',
				liveBroadcastContent: 'string',
				publishTime: 'string',
			},
		},
	],
	nextPageToken: '1',
	prevPageToken: '0',
}

describe('FilmCards', () => {
	afterEach(() => {
		fetch.resetMocks()
	})

	it('renders', async () => {
		fetch.mockResponse(JSON.stringify(mockResponse))
		const { getByTestId, store } = renderWithProviders(<FilmCards />)

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('pending'))

		const loader = getByTestId('loader')
		expect(loader).toBeInTheDocument()
	})

	it('should render films when data exists', async () => {
		fetch.mockResponse(JSON.stringify(mockResponse))
		const { getByTestId, store } = renderWithProviders(<FilmCards />)

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('fulfilled'))

		const films = getByTestId('films container')
		expect(films).toBeInTheDocument()
	})

	it('should open popup on video click', async () => {
		fetch.mockResponse(JSON.stringify(mockResponse))
		const { getByText, getByTestId, store } = renderWithProviders(<FilmCards />)

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('fulfilled'))

		const film = getByText('test title')

		fireEvent.click(film, { target: film })

		const popup = getByTestId('popup')
		expect(popup).toBeInTheDocument()
	})

	it('should show placeholder if no data', async () => {
		const { getByTestId, store } = renderWithProviders(<FilmCards />)

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('fulfilled'))

		const placeholder = getByTestId('placeholder')

		expect(placeholder).toBeInTheDocument()
	})

	it('should hide popup after click on it', async () => {
		fetch.mockResponse(JSON.stringify(mockResponse))
		const { getByText, getByTestId, store } = renderWithProviders(<FilmCards />)

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('fulfilled'))

		const film = getByText('test title')

		fireEvent.click(film, { target: film })

		const popup = getByTestId('popup')
		expect(popup).toBeInTheDocument()
		fireEvent.click(popup)
		expect(popup).not.toBeInTheDocument()
	})

	it('should load more films on btn click', async () => {
		fetch.mockResponseOnce(JSON.stringify(mockResponse))
		fetch.mockResponse(JSON.stringify(mockResponsedouble))
		const { getByText, getAllByText, store } = renderWithProviders(<FilmCards />)

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('fulfilled'))

		const btn = getByText('Show More')

		fireEvent.click(btn, { target: btn })

		await waitFor(() => expect(store.getState().movies.queries['-']?.status).toBe('fulfilled'))

		const films = getAllByText('test title')
		expect(films.length).toBe(2)
	})
})
