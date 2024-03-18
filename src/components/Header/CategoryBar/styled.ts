import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { flex } from 'src/styles/mixins'

export const StyledCategoryBar = styled.div`
	${flex({ alignItems: 'center' })}
`

export const StyledBtn = styled.button<{ $isActive?: boolean }>`
	${flex({ alignItems: 'center', justifyContent: 'center' })}
	min-width: 87px;
	height: 30px;
	padding: 7px 12px;
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 15px;
	background-color: ${({ $isActive, theme }) =>
		$isActive ? theme.colors.active : theme.colors.secondary};
	color: ${({ $isActive, theme }) => ($isActive ? theme.colors.textActive : theme.colors.text)};

	@media ${device.sm} {
		flex-wrap: wrap;

		&:nth-child(1n + 5) {
			display: none;
		}
	}
`

export const StyledBtnContainer = styled.div`
	${flex({ alignItems: 'center' })}
	gap: 10px;

	@media ${device.sm} {
		flex-wrap: wrap;
	}

	> :first-child {
		min-width: auto;
	}
`
