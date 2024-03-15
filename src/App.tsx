import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import FilmCards from './components/FilmCards'
import Footer from './components/Footer'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { StyledWrongText } from 'components/FilmCards/styled'
import { GlobalStyles, StyledWrapper } from './global.styles'
import { useTypedSelector } from 'hooks/useTypedSelector'

const App: React.FC = (): JSX.Element => {
	const { theme } = useTypedSelector((state) => state.theme)

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledWrapper>
				<Header />
				<main>
					<ErrorBoundary
						fallback={
							<StyledWrongText>
								There are no such videos or or the maximum number of api requests has been exceeded
							</StyledWrongText>
						}
					>
						<FilmCards />
					</ErrorBoundary>
				</main>
				<Footer />
			</StyledWrapper>
		</ThemeProvider>
	)
}

export default App
