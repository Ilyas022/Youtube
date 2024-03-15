import { device } from 'constants/breakpoints'
import styled from 'styled-components'

export const StyledLogo = styled.a`
	display: flex;
	align-items: center;
	gap: 6px;
	font-size: 18px;
	font-weight: 700;
	line-height: 21px;
	letter-spacing: 0;

	@media ${device.xs} {
		gap: 0;
		padding-left: 6px;
	}
`
