import { fireEvent } from '@testing-library/react'

import { renderWithProviders } from 'utils/testWrapper'

import CategoryBar from '.'

describe('Category bar', () => {
	it('should render', () => {
		const { getAllByRole } = renderWithProviders(<CategoryBar />)

		const categories = getAllByRole('button')

		expect(categories.length).toBe(6)
	})
	it('should hadnle category setting', () => {
		const { getAllByRole, store } = renderWithProviders(<CategoryBar />)

		const button = getAllByRole('button')[0]

		fireEvent.click(button, { target: { value: '25' } })

		const stateCategory = store.getState().filters.category

		expect(stateCategory).toBe('25')
	})
})
