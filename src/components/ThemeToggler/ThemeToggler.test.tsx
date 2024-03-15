import { fireEvent } from '@testing-library/react'

import { renderWithProviders } from 'utils/testWrapper'

import ThemeToggler from '.'

describe('Theme toggler', () => {
	it('should render', () => {
		const { getByTestId } = renderWithProviders(<ThemeToggler />)

		const toggler = getByTestId('toggler')
		expect(toggler).toBeInTheDocument()
	})
	it('should hadnle toggle', () => {
		const { getByTestId, store } = renderWithProviders(<ThemeToggler />)

		const toggler = getByTestId('toggler')

		fireEvent.click(toggler)
		let state = store.getState()

		expect(toggler).toBeChecked()
		expect(state.theme.theme.name).toBe('dark')

		fireEvent.click(toggler)
		state = store.getState()

		expect(toggler).not.toBeChecked()
		expect(state.theme.theme.name).toBe('light')
	})
})
