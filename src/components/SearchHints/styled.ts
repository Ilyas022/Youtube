import styled from 'styled-components'

export const StyledSearchHints = styled.div`
	display: flex;
	max-height: 300px;
	overflow: auto;
	background: white;
	flex-direction: column;
	border: 1px solid black;
`

export const StyledHintsBtn = styled.button`
	background: transparent;
	padding: 5px;
	transition: background 0.3s ease 0s;
	& + & {
		border-top: 1px solid black;
	}

	@media (hover: hover) {
		&:hover {
			background: gray;
		}
	}
`
