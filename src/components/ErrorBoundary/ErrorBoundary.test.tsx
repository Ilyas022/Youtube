import { render, screen } from '@testing-library/react'
import ErrorBoundary from './ErrorBoundary'
import { renderWithProviders } from 'utils/testWrapper'

const ChildComponent = () => <div>Child Component</div>
const FallbackComponent = () => <div>Fallback Component</div>

const errorMessage = 'An error occurred'
const ThrowErrorComponent = () => {
	throw new Error(errorMessage)
}

describe('Error Boundary', () => {
	it('renders children without error', () => {
		const { getByText } = renderWithProviders(
			<ErrorBoundary>
				<ChildComponent />
			</ErrorBoundary>
		)
		expect(getByText('Child Component')).toBeInTheDocument()
	})

	it('renders fallback on error', () => {
		render(
			<ErrorBoundary fallback={<FallbackComponent />}>
				<ThrowErrorComponent />
			</ErrorBoundary>
		)
		expect(screen.getByText('Fallback Component')).toBeInTheDocument()
	})

	it('logs error message on error', () => {
		const consoleLogSpy = jest.spyOn(console, 'log')

		render(
			<ErrorBoundary fallback={<FallbackComponent />}>
				<ThrowErrorComponent />
			</ErrorBoundary>
		)
		expect(consoleLogSpy).toHaveBeenCalledWith('error catched')
	})
})
