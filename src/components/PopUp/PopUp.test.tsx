import { renderWithProviders } from 'utils/testWrapper'
import { fireEvent } from '@testing-library/react'
import PopUp from './PopUp'

describe('PopUp', () => {
	it('should render', () => {
		const { getByTitle } = renderWithProviders(<PopUp setOpened={() => {}} link="test" />)

		const popup = getByTitle('Youtube embed')
		expect(popup).toBeInTheDocument()
	})

	it('should handle close', () => {
		const click = jest.fn()

		const { getByTestId } = renderWithProviders(<PopUp setOpened={click} link="test" />)

		const popup = getByTestId('popup')
		fireEvent.click(popup)
		expect(click).toHaveBeenCalled()
	})
})
