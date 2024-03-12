import SearchBar from './SearchBar'
import { fireEvent, waitFor } from '@testing-library/react'
import { renderWithProviders } from 'utils/testWrapper'
import fetch from 'jest-fetch-mock'

describe('SearchBar', () => {
	it('renders the search input and button', () => {
		const { getByRole, getByPlaceholderText } = renderWithProviders(<SearchBar />)

		expect(getByPlaceholderText('Search')).toBeInTheDocument()
		expect(getByRole('button')).toBeInTheDocument()
	})

	it('handles input change', () => {
		const { getByPlaceholderText } = renderWithProviders(<SearchBar />)

		const input = getByPlaceholderText('Search')
		fireEvent.change(input, { target: { value: 'test' } })

		expect(input).toHaveValue('test')
	})

	it('handles submit', () => {
		const { getByPlaceholderText, store } = renderWithProviders(<SearchBar />)

		const input = getByPlaceholderText('Search')
		fireEvent.change(input, { target: { value: 'test' } })
		const form = input.closest('form')!
		fireEvent.submit(form)

		const state = store.getState()
		expect(state.filters.title).toBe('test')
	})

	it('render hints if data exists', async () => {
		fetch.mockResponse(JSON.stringify(['test']))
		const { getByText, getByPlaceholderText, store } = renderWithProviders(<SearchBar />)

		await waitFor(() =>
			expect(store.getState().movies.queries['getVideoSuggestions("")']?.status).toBe('fulfilled')
		)

		const input = getByPlaceholderText('Search')
		fireEvent.focus(input)

		const hint = getByText('test')
		expect(hint).toBeInTheDocument()
	})

	it('handles hint click', async () => {
		fetch.mockResponse(JSON.stringify(['test']))
		const { getByText, getByPlaceholderText, store } = renderWithProviders(<SearchBar />)

		await waitFor(() =>
			expect(store.getState().movies.queries['getVideoSuggestions("")']?.status).toBe('fulfilled')
		)

		const input = getByPlaceholderText('Search')
		fireEvent.focus(input)

		const hint = getByText('test')
		expect(hint).toBeInTheDocument()

		fireEvent.click(hint)
		expect(input).not.toHaveFocus()
	})

	it('handles click outside to close hints', async () => {
		fetch.mockResponse(JSON.stringify(['test']))
		const { getByText, getByTestId, getByPlaceholderText, store } = renderWithProviders(
			<SearchBar />
		)

		await waitFor(() =>
			expect(store.getState().movies.queries['getVideoSuggestions("")']?.status).toBe('fulfilled')
		)

		const input = getByPlaceholderText('Search')
		fireEvent.focus(input)
		const hint = getByText('test')
		const button = getByTestId('search submit button')

		fireEvent.focus(input)
		expect(hint).toBeInTheDocument()

		fireEvent.click(button)
		expect(input).not.toHaveFocus()
	})
})
