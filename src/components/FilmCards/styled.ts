import { device } from '../../global.styles'
import styled from 'styled-components'

export const StyledFilmCardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 30px;
	margin: 0 8px 40px;

	@media ${device.sm} {
		margin: 0 0 36px 0;
		row-gap: 26px;
	}

	@media ${device.lg} {
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${device.md} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${device.sm} {
		grid-template-columns: repeat(1, 100%);
	}
`

export const StyledBtnContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const StyledWrongText = styled.p`
	text-align: center;
	font-size: 24px;
	line-height: 120%;
`
