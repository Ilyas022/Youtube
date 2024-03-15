import Header from './components/Header'
import FilmCards from './components/FilmCards'
import Footer from './components/Footer'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { StyledWrongText } from 'components/FilmCards/styled'
import { StyledWrapper } from './global.styles'

const App: React.FC = (): JSX.Element => {
	return (
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
	)
}

export default App
