import styled from 'styled-components'

import { flex } from 'src/styles/mixins'

export const StyledSearchHints = styled.div`
	${flex({ flexDirection: 'column' })}
	max-height: 300px;
	overflow: auto;
	background: ${({ theme }) => theme.colors.white};
	border: 1px solid ${({ theme }) => theme.colors.black};
`

export const StyledHintsBtn = styled.button`
	background: transparent;
	padding: 5px;
	transition: background 0.3s ease 0s;
	& + & {
		border-top: 1px solid ${({ theme }) => theme.colors.black};
	}

	@media (hover: hover) {
		&:hover {
			background: ${({ theme }) => theme.colors.icon};
		}
	}
`
