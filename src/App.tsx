import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { StyledWrongText } from 'components/FilmCards/styled'
import { StyledWrapper } from 'src/global.styles'

import FilmCards from './components/FilmCards'
import Footer from './components/Footer'
import Header from './components/Header'

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
