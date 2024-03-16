import YtIcon from 'components/icons/YtIcon'

import { config } from './config'
import {
	StyledDirectorImgContainer,
	StyledDirectorInfo,
	StyledFilmCard,
	StyledFilmData,
	StyledFilmTitle,
	StyledImgContainer,
	StyledSeparator,
} from './styled'

interface IFilmCard {
	author: string
	year: string
	title: string
	image?: string

	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const FilmCard: React.FC<IFilmCard> = ({
	title,
	author,
	year,
	image,
	onClick,
}: IFilmCard): JSX.Element => {
	return (
		<StyledFilmCard onClick={onClick}>
			<StyledImgContainer>
				<img src={image ? image : config.imageAltUrl} alt={config.imageAltText} loading="lazy" />
			</StyledImgContainer>

			<StyledDirectorInfo>
				<StyledDirectorImgContainer>
					<YtIcon />
				</StyledDirectorImgContainer>
				<div>
					<StyledFilmTitle>{title}</StyledFilmTitle>
					<StyledFilmData>
						<p>{author}</p>
						<StyledSeparator></StyledSeparator>
						<p>{year}</p>
					</StyledFilmData>
				</div>
			</StyledDirectorInfo>
		</StyledFilmCard>
	)
}

export default FilmCard
