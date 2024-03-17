import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { flex } from 'src/styles/mixins'

export const StyledLogo = styled.a`
	${flex({ alignItems: 'center' })}
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
