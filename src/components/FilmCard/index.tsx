import { Icon } from 'components/Icon'

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

export const FilmCard = (props: IFilmCard) => {
	const { title, author, year, image, onClick } = props

	return (
		<StyledFilmCard onClick={onClick}>
			<StyledImgContainer>
				<img src={image ? image : config.imageAltUrl} alt={config.imageAltText} loading="lazy" />
			</StyledImgContainer>

			<StyledDirectorInfo>
				<StyledDirectorImgContainer>
					<Icon name="youtube" />
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
