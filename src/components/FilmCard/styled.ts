import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledFilmCard = styled.button`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	background: transparent;
	position: relative;
	text-align: left;

	@media (hover: hover) {
		&:hover > div > img {
			transform: scale(1.2);
		}
	}
`

export const StyledImgContainer = styled.div`
	width: 100%;
	height: 186px;
	margin-bottom: 12px;
	overflow: hidden;

	@media ${device.xs} {
		height: 128px;
	}

	> img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.4s ease 0s;
	}
`

export const StyledDirectorImgContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.secondary};
	overflow: hidden;
	flex-shrink: 0;

	@media ${device.xs} {
		height: 128px;

		width: 22px;
		height: 27px;
	}
`

export const StyledDirectorInfo = styled.div`
	display: flex;
	gap: 12px;
	padding-right: 10px;
	color: ${({ theme }) => theme.colors.text};

	@media ${device.xs} {
		gap: 9px;
	}
`

export const StyledFilmData = styled.div`
	display: flex;
	align-items: center;
	margin-top: 4px;
	gap: 5px;
	font-size: 14px;
	line-height: 18px;
`

export const StyledSeparator = styled.span`
	display: block;
	width: 3px;
	height: 3px;
	margin: 5px 0;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.text};
`

export const StyledFilmTitle = styled.p`
	margin-top: 10px;
	font-size: 16px;
	line-height: 22px;
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;

	@media ${device.xs} {
		margin: 0;
		-webkit-line-clamp: 1;
	}
`
