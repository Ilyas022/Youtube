import { renderWithProviders } from 'utils/testWrapper'

import { FilmCardSkeleton } from '.'

describe('FilmCardSkeleton', () => {
	it('should render', () => {
		const { getByTestId } = renderWithProviders(<FilmCardSkeleton />)

		const skeleton = getByTestId('Film card skeleton')
		expect(skeleton).toBeInTheDocument()
	})
})
