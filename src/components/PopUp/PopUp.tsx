import React, { useEffect, useRef } from 'react'

import { useScrollLock } from 'hooks/useScrollLock'

import { StyledIframe, StyledPopUp, StyledPopUpContainer } from './PopUp.styles'

interface IPopUp {
	link: string
	setOpened: () => void
}

const PopUp: React.FC<IPopUp> = ({ link, setOpened }: IPopUp): JSX.Element => {
	const [lockScroll, unlockScroll] = useScrollLock()
	const ref = useRef(null)

	const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === ref.current) setOpened()
	}

	useEffect(() => {
		lockScroll()

		return () => unlockScroll()
	}, [lockScroll, unlockScroll])

	return (
		<StyledPopUp ref={ref} onClick={handleClose} data-testid="popup">
			<StyledPopUpContainer>
				<StyledIframe
					title="Youtube embed"
					src={`https://www.youtube.com/embed/${link}?autoplay=1`}
					allow="autoplay"
					allowFullScreen
				></StyledIframe>
			</StyledPopUpContainer>
		</StyledPopUp>
	)
}

export default PopUp
