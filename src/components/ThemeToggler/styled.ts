import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledThemneToggler = styled.div`
	@media ${device.sm} {
		display: none;
		visibility: hidden;
	}
`
export const StyledToggleLabel = styled.label`
	position: relative;
	display: inline-block;
	width: 50px;
	height: 25px;
`
export const StyledToggleInput = styled.input`
	display: none;

	&:checked + span::before {
		transform: translateX(25px);
		background-color: #333;
	}
	&:checked + span {
		background-color: #ff9f00;
	}
`

export const StyledToggleSpan = styled.span`
	position: absolute;
	cursor: pointer;
	background-color: #b6b6b6;
	border-radius: 25px;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: background-color 0.2s ease;
	&::before {
		position: absolute;
		content: '';
		/* left: 2px;
		top: 2px; */
		width: 25px;
		height: 25px;
		background-color: #333;
		border-radius: 50%;
		transition: transform 0.3s ease;
	}
`
