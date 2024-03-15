import { device } from 'constants/breakpoints'
import styled from 'styled-components'

export const StyledCategoryBar = styled.div`
	display: flex;
	align-items: center;
`

export const StyledBtn = styled.button<{ $isActive?: boolean }>`
	display: flex;
	min-width: 87px;
	align-items: center;
	justify-content: center;
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
	display: flex;
	align-items: center;
	gap: 10px;

	@media ${device.sm} {
		flex-wrap: wrap;
	}

	> :first-child {
		min-width: auto;
	}
`
