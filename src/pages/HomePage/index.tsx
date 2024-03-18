import { ErrorBoundary } from 'components/ErrorBoundary'
import { FilmCards } from 'components/FilmCards'
import { StyledWrongText } from 'components/FilmCards/styled'

export const HomePage = () => {
	return (
		<ErrorBoundary
			fallback={
				<StyledWrongText>
					There are no such videos or or the maximum number of api requests has been exceeded
				</StyledWrongText>
			}
		>
			<FilmCards />
		</ErrorBoundary>
	)
}
