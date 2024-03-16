import {
	StyledDirectorImgSkeleton,
	StyledDirectorInfo,
	StyledFilmData,
	StyledFilmTitleSkeleton,
	StyledImgSkeleton,
	StyledSeparator,
} from './styled'

export const FilmCardSkeleton: React.FC = (): JSX.Element => {
	return (
		<div data-testid="Film card skeleton">
			<StyledImgSkeleton />
			<StyledDirectorInfo>
				<StyledDirectorImgSkeleton />
				<div>
					<StyledFilmTitleSkeleton />
					<StyledFilmData>
						<div />
						<StyledSeparator />
						<div />
					</StyledFilmData>
				</div>
			</StyledDirectorInfo>
		</div>
	)
}
