import { renderWithProviders } from 'utils/testWrapper'
import Header from './Header'

describe('Header', () => {
	it('should render', () => {
		const { getByRole } = renderWithProviders(<Header />)

		const header = getByRole('banner')

		expect(header).toBeInTheDocument()
	})
})
