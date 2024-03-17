import styled, { css } from 'styled-components'

import { device } from 'constants/breakpoints'
import { flex } from 'src/styles/mixins'

export const StyledPhoneMenu = styled.div<{ $open?: boolean }>`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 5;
	display: none;

	width: 100%;
	align-items: stretch;
	background-color: #000000bf;
	transform: translateX(100%);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	@media ${device.sm} {
		${flex({ flexDirection: 'column' })}
		padding: 30% 10%;
	}

	${(props) =>
		props.$open &&
		css`
			transform: translateX(0);
		`}

	> p {
		text-align: center;
		color: white;
		font-size: 16px;
		line-height: 120%;
	}
	> *:not(:last-child) {
		margin-bottom: 10px;
	}
`
