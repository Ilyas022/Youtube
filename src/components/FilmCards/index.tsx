import React, { useCallback, useMemo, useState } from 'react'

import { FilmCard } from 'components/FilmCard'
import { Button } from 'components/FilmCards/Button'
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

	const handleOpenPopUpClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement>, link: string) => {
			e.preventDefault()
			setPopUp(true)
			setPopUpVideoId(link)
		},
		[]
	)

	const handleShowMore = useCallback(() => {
		data && setPageToken(data.nextPageToken)
	}, [data])

	const handlePopUpClose = useCallback(() => {
		setPopUp(false)
	}, [])

	const films = useMemo(() => {
		if (data?.items) return Object.values(data.items)
	}, [data])

	const isNodata = !isLoading && !films?.length
	const isDataExist = !!films?.length

	const filmCards = useMemo(
		() =>
			isDataExist &&
			films.map(
				({ snippet: { publishedAt, channelTitle, title, thumbnails }, id: { videoId } }) => (
					<FilmCard
						key={videoId}
						title={title}
						author={channelTitle}
						year={publishedAt.substr(0, 4)}
						image={thumbnails.medium.url}
						onClick={(e) => handleOpenPopUpClick(e, videoId)}
					/>
				)
			),
		[films, handleOpenPopUpClick, isDataExist]
	)

	return (
		<>
			<StyledFilmCardsContainer data-testid="films container">
				{isLoading && loader}
				{isDataExist && filmCards}
			</StyledFilmCardsContainer>

			{isNodata && <StyledWrongText data-testid="placeholder">{config.phText}</StyledWrongText>}

			{isDataExist && (
				<StyledBtnContainer>
					<Button onClick={handleShowMore} text="Show More" />
				</StyledBtnContainer>
			)}

			{isPopUpOpened && (
				<PopUp data-testid="popup" link={popUpVideoId} setOpened={handlePopUpClose} />
			)}
		</>
	)
}
