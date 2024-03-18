import styled from 'styled-components'

import { device } from 'constants/breakpoints'

export const StyledWrapper = styled.div`
	width: 100%;
	min-height: 100%;
	position: relative;
	display: flex;
	flex-direction: column;
	max-width: 1480px;
	padding: 0 20px;
	margin: 0 auto;
	overflow: hidden;

	@media ${device.xs} {
		padding: 0 17px 0 14px;
	}

	> main {
		flex: 1 0 auto;
		padding-bottom: 55px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
		margin-bottom: 62px;

		@media ${device.sm} {
			padding-bottom: 12px;
			margin-bottom: 7px;
		}
	}

	> footer {
		flex: 0 0 auto;
	}
`
