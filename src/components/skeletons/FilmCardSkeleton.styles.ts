import styled, { keyframes } from 'styled-components'

export const pulse = keyframes`
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: .5;
	}
`

export const StyledImgSkeleton = styled.div`
	width: 100%;
	height: 186px;
	margin-bottom: 12px;
	background: gray;
	animation: ${pulse} 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

export const StyledDirectorImgSkeleton = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	overflow: hidden;
	background: gray;
	flex-shrink: 0;
	animation: ${pulse} 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

export const StyledDirectorInfo = styled.div`
	display: flex;
	gap: 12px;
`

export const StyledFilmData = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;

	> div {
		height: 10px;
		width: 50px;
		background: grey;
		border-radius: 8px;
		animation: ${pulse} 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
`

export const StyledSeparator = styled.span`
	display: block;
	width: 3px;
	height: 3px;
	margin: 5px 0;
	border-radius: 50%;
	background: #000;
	animation: ${pulse} 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

export const StyledFilmTitleSkeleton = styled.p`
	height: 10px;
	width: 50px;
	background: grey;
	border-radius: 8px;
	margin-bottom: 5px;
	animation: ${pulse} 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`
