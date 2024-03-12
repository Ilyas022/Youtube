import { device } from '../../global.styles'
import styled from 'styled-components'

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
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 0;

	@media ${device.xs} {
		padding: 0 !important;
	}
`
export const StyledTopWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 1330px) {
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
