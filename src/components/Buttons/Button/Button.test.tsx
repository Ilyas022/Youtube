import { renderWithProviders } from 'utils/testWrapper'
import { fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
	it('should render', () => {
		const { getByText } = renderWithProviders(<Button onClick={() => {}} text="test" />)

		const button = getByText('test')
		expect(button).toBeInTheDocument()
	})

	it('should handle click', () => {
		const click = jest.fn()

		const { getByText } = renderWithProviders(<Button onClick={click} text="test" />)

		const button = getByText('test')
		fireEvent.click(button)
		expect(click).toHaveBeenCalled()
	})
})
