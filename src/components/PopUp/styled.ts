import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { flex } from 'src/styles/mixins'

export const StyledPopUp = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	${flex({ justifyContent: 'center', alignItems: 'center' })}
	flex-direction: column;
	width: 100%;
	height: 100%;
	background: #000000c4;
`

export const StyledPopUpContainer = styled.div`
	height: 80%;
	width: 70%;
	${flex({ flexDirection: 'column' })}

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
