import { fireEvent, render } from '@testing-library/react'

import FilmCard from './FilmCard'
import { ThemeProvider } from 'styled-components'
import { light } from '../../global.styles'

describe('FilmCard', () => {
	const mockOnClick = jest.fn()

	it('should create FilmCard', () => {
		const { getByText, getByAltText } = render(
			<ThemeProvider theme={light}>
				<FilmCard
					title="Test Film"
					author="Test Author"
					year="2022"
					image="https://via.placeholder.com/150"
					onClick={mockOnClick}
				/>
			</ThemeProvider>
		)

		expect(getByText('Test Film')).toBeInTheDocument()
		expect(getByText('Test Author')).toBeInTheDocument()
		expect(getByText('2022')).toBeInTheDocument()
		expect(getByAltText('film preview')).toHaveAttribute('src', 'https://via.placeholder.com/150')
	})

	it('calls the onClick function when clicked', () => {
		const { getByRole } = render(
			<ThemeProvider theme={light}>
				<FilmCard
					title="Test Film"
					author="Test Author"
					year="2022"
					image="https://via.placeholder.com/150"
					onClick={mockOnClick}
				/>
			</ThemeProvider>
		)

		fireEvent.click(getByRole('button'))

		expect(mockOnClick).toHaveBeenCalledTimes(1)
	})

	it('sets placeholder if no image', () => {
		const { getByAltText } = render(
			<ThemeProvider theme={light}>
				<FilmCard
					title="Test Film"
					author="Test Author"
					year="2022"
					image={undefined}
					onClick={mockOnClick}
				/>
			</ThemeProvider>
		)

		expect(getByAltText('film preview')).toHaveAttribute(
			'src',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/2560px-Placeholder_view_vector.svg.png'
		)
	})
})
