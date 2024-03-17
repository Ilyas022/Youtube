import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { ThemeFonts } from 'src/constants/fonts'
import { fonts } from 'src/styles/mixins'

export const StyledBtn = styled.button`
	padding: 14px 35px;
	background: #ff8a00;
	border-radius: 10px;
	color: white;
	${fonts(ThemeFonts.big)}
	cursor: pointer;
	transition: 0.3s ease 0s;

	@media (hover: hover) {
		&:hover {
			background: #de7800;
		}
	}

	@media ${device.sm} {
		margin-bottom: 50px;
		padding: 5px 66px 3px 56px;
		font-size: 16px;

		> &:first-child {
			padding: 16px 0 14px 0;
		}
		> *:not(:last-child) {
			border: 0;
		}
	}
`
