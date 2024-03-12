import { renderWithProviders } from 'utils/testWrapper'
import Footer from './Footer'

describe('Footer', () => {
	it('should render', () => {
		const { getByRole } = renderWithProviders(<Footer />)

		const footer = getByRole('contentinfo')

		expect(footer).toBeInTheDocument()
	})
})
