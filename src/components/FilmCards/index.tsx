import React, { useState } from 'react'

import { Button } from 'components//Buttons/Button'
import { FilmCard } from 'components/FilmCard'
import { PopUp } from 'components/PopUp'
import { FilmCardSkeleton } from 'components/skeletons'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { useGetVideosQuery } from 'store/api/api'
import { selectFilters } from 'store/selectors'

import { config } from './config'
import { StyledBtnContainer, StyledFilmCardsContainer, StyledWrongText } from './styled'

const loader = Array(16)
	.fill(undefined)
	.map((_, i) => <FilmCardSkeleton key={i} />)

export const FilmCards = () => {
	const { title, category } = useTypedSelector(selectFilters)

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

	const isNodata = !isLoading && !data?.items.length
	const isDataExist = data?.items.length

	if (isLoading) {
		return <StyledFilmCardsContainer data-testid="loader">{loader}</StyledFilmCardsContainer>
	}

	if (isNodata) {
		return <StyledWrongText data-testid="placeholder">{config.phText}</StyledWrongText>
	}

	return (
		<>
			<StyledFilmCardsContainer data-testid="films container">
				{isDataExist &&
					data.items.map(
						({ snippet: { publishedAt, channelTitle, title, thumbnails }, id: { videoId } }) => {
							return (
								<FilmCard
									key={videoId}
									title={title}
									author={channelTitle}
									year={publishedAt.substr(0, 4)}
									image={thumbnails.medium.url}
									onClick={(e) => handleOpenPopUpClick(e, videoId)}
								/>
							)
						}
					)}
			</StyledFilmCardsContainer>
			{isDataExist && (
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
