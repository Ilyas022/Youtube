import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { flex } from 'src/styles/mixins'

export const StyledHeader = styled.header`
	margin-bottom: 28px;

	> *:not(:last-child) {
		padding: 15px 0 14px 0;
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
	}

	@media ${device.xs} {
		margin-bottom: 50px;

		> &:first-child {
			padding: 16px 0 14px 0;
		}
		> *:not(:last-child) {
			border: 0;
		}
	}
`

export const StyledBottomWrapper = styled.div`
	${flex({ justifyContent: 'center', alignItems: 'center' })}
	padding: 12px 0;

	@media ${device.xs} {
		padding: 0 !important;
	}
`
export const StyledTopWrapper = styled.div`
	${flex({ justifyContent: 'space-between', alignItems: 'center' })}

	@media ${device.semiXl} {
		justify-content: stretch;
		> :nth-child(1) {
			margin-right: 243px;
		}
		> :nth-child(3) {
			margin-left: auto;
		}
	}

	@media ${device.sm} {
		flex-direction: column;
		gap: 30px;
		align-items: flex-start;

		> form {
			width: 100%;
		}
	}
`
