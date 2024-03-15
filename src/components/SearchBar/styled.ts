import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledForm = styled.form`
	display: flex;

	@media ${device.lg} {
		flex: 0 1 40%;
	}
`
export const StyledSearchContainer = styled.div`
	position: relative;

	@media ${device.lg} {
		width: 100%;
	}
`

export const StyledSearchInput = styled.input`
	min-width: 570px;
	padding: 10px 15px;
	font-size: 14px;
	font-weight: 400;
	line-height: 16px;
	background-color: transparent;
	border: 1px solid ${({ theme }) => theme.colors.primary};

	@media ${device.lg} {
		min-width: auto;
		width: 100%;
	}

	@media ${device.xs} {
		padding: 7px 12px;
	}
`

export const StyledSearchBtn = styled.button`
	border: 1px solid ${({ theme }) => theme.colors.primary};
	padding: 8px 19px;
	background-color: transparent;

	@media ${device.xs} {
		padding: 5px 16px;
	}

	> svg {
		fill: ${({ theme }) => theme.colors.primary};
	}
`

export const StyledSearchHints = styled.div`
	position: absolute;
	z-index: 5;
	top: 100%;
	left: 0;
	width: 100%;
`
