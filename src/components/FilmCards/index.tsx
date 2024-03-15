import React, { useState } from 'react'

import { useTypedSelector } from 'hooks/useTypedSelector'
import { useGetVideosQuery } from 'store/api'

import FilmCard from 'components/FilmCard'
import FilmCardSkeleton from 'components/skeletons'
import Button from '../Buttons/Button'
import PopUp from 'components/PopUp'

import { StyledBtnContainer, StyledFilmCardsContainer, StyledWrongText } from './styled'

const FilmCards: React.FC = (): JSX.Element => {
	const { title, category } = useTypedSelector((state) => state.filters)

	const [isPopUpOpened, setPopUp] = useState(false)
	const [popUpVideoId, setPopUpVideoId] = useState('')

	const [pageToken, setPageToken] = useState('')

	const { data, isLoading } = useGetVideosQuery({ title, category, pageToken })

	const handleOpenPopUpClick = (e: React.MouseEvent<HTMLButtonElement>, link: string) => {
		e.preventDefault()
		setPopUp(true)
		setPopUpVideoId(link)
	}

	const handleShowMore = () => {
		data && setPageToken(data.nextPageToken)
	}

	if (isLoading) {
		return (
			<StyledFilmCardsContainer data-testid="loader">
				<FilmCardSkeleton />
				<FilmCardSkeleton />
				<FilmCardSkeleton />
				<FilmCardSkeleton />
				<FilmCardSkeleton />
			</StyledFilmCardsContainer>
		)
	}

	if (!isLoading && !data?.items.length) {
		return (
			<StyledWrongText data-testid="placeholder">
				There are no such videos or or the maximum number of api requests has been exceeded
			</StyledWrongText>
		)
	}

	return (
		<>
			<StyledFilmCardsContainer data-testid="films container">
				{data?.items.length &&
					data.items.map((video) => {
						return (
							<FilmCard
								key={video.id.videoId}
								title={video.snippet.title}
								author={video.snippet.channelTitle}
								year={video.snippet.publishedAt.substr(0, 4)}
								image={video.snippet.thumbnails.medium.url}
								onClick={(e) => handleOpenPopUpClick(e, video.id.videoId)}
							/>
						)
					})}
			</StyledFilmCardsContainer>
			{data && (
				<StyledBtnContainer>
					<Button onClick={handleShowMore} text="Show More" />
				</StyledBtnContainer>
			)}
			{/* <StyledFilmCardsContainer>
				<FilmCardSkeleton />
				<FilmCardSkeleton />
				<FilmCardSkeleton />
				<FilmCardSkeleton />
				<FilmCardSkeleton />
			</StyledFilmCardsContainer> */}
			{isPopUpOpened && (
				<PopUp data-testid="popup" link={popUpVideoId} setOpened={() => setPopUp(false)} />
			)}
		</>
	)
}

export default FilmCards
