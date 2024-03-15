import { renderWithProviders } from 'utils/testWrapper'
import SearchHints from '.'
import { fireEvent } from '@testing-library/react'

describe('SearchHints', () => {
	it('should render', () => {
		const { getByText } = renderWithProviders(
			<SearchHints hints={['test']} isLoading={false} onClick={(str) => console.log(str)} />
		)

		const button = getByText('test')
		expect(button).toBeInTheDocument()
	})

	it('should show loading if loading props is loading', () => {
		const { getByText } = renderWithProviders(
			<SearchHints hints={['test']} isLoading={true} onClick={(str) => console.log(str)} />
		)

		const button = getByText('loading')
		expect(button).toBeInTheDocument()
	})

	it('should handle click', () => {
		const click = jest.fn()

		const { getByText } = renderWithProviders(
			<SearchHints hints={['test']} isLoading={false} onClick={click} />
		)

		const button = getByText('test')
		fireEvent.click(button)
		expect(click).toHaveBeenCalledWith('test')
	})
})
