import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledBurgerBtn = styled.div`
	display: none;
	position: absolute;
	top: 20px;
	right: 25px;

	@media ${device.sm} {
		display: block;
	}
`

export const StyledBurgerInput = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	visibility: hidden;

	&:checked + label::before {
		top: 5px;
		transform: rotate(45deg);
		box-shadow: 0 6px 0 rgba(0, 0, 0, 0);
		transition:
			box-shadow 0.15s,
			top 0.3s,
			transform 0.3s 0.15s;
		background-color: #ff8a00;
	}
	&:checked + label::after {
		bottom: 5px;
		transform: rotate(-45deg);
		transition:
			bottom 0.3s,
			transform 0.3s 0.15s;
		background-color: #ff8a00;
	}
`

export const StyledBurgerLabel = styled.label`
	position: relative;
	z-index: 10;
	cursor: pointer;
	display: block;
	position: relative;
	border: none;
	background: transparent;
	width: 16px;
	height: 12px;

	&:before,
	&:after {
		content: '';
		left: 0;
		position: absolute;
		display: block;
		width: 100%;
		height: 2px;
		border-radius: 10px;
		background: #000;
	}
	&:before {
		top: 0;
		box-shadow: 0 5px 0 #000;
		transition:
			box-shadow 0.3s 0.15s,
			top 0.3s 0.15s,
			transform 0.3s;
	}
	&:after {
		bottom: 0;
		transition:
			bottom 0.3s 0.15s,
			transform 0.3s;
	}
`
