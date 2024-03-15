import { device } from 'constants/breakpoints'
import styled from 'styled-components'

export const StyledPopUp = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: #000000c4;
`

export const StyledPopUpContainer = styled.div`
	height: 80%;
	width: 70%;
	display: flex;
	flex-direction: column;

	max-width: 1280px;
	max-height: 720px;

	@media ${device.md} {
		height: 60%;
	}

	@media ${device.sm} {
		height: 50%;
	}
	@media ${device.xs} {
		height: 40%;
	}
`

export const StyledIframe = styled.iframe`
	width: 100%;
	height: 100%;
`
