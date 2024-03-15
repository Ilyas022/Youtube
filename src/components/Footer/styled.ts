import { device } from 'constants/breakpoints'
import styled from 'styled-components'

export const StyledFooter = styled.footer`
	padding-bottom: 20px;
`

export const StyledFooterLinks = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 44px;
	padding: 0 11px 0 36px;

	@media (max-width: 800px) {
		flex-direction: column;
		justify-content: space-between;
		gap: 30px;
	}

	@media ${device.sm} {
		padding: 0;
		gap: 43px;
		margin-bottom: 38px;
	}
`

export const StyledFooterTopics = styled.div`
	display: flex;
	gap: 32px;
	padding-top: 4px;

	> :first-child {
		flex: 0 0 293px;
	}

	> :nth-child(2) {
		word-spacing: 2px;
	}

	@media ${device.md} {
		padding-top: 0;
	}

	@media ${device.sm} {
		flex-direction: column-reverse;
		gap: 15px;

		& > :first-child {
			flex: 0 1 auto;
		}
	}
`

export const StyledFooterTopic = styled.p`
	color: ${({ theme }) => theme.colors.text};
	font-size: 20px;
	font-weight: 500;
	line-height: 23px;

	@media ${device.md} {
		flex-basis: 43%;
		font-size: 16px;
		line-height: 120%;
	}

	@media ${device.md} {
		font-size: 14px;
	}
`

export const StyledFooterAffiliation = styled.p`
	color: ${({ theme }) => theme.colors.textLight};
	text-align: center;
	font-size: 24px;
	font-weight: 500;
	line-height: 28px;

	@media ${device.md} {
		font-size: 22px;
		line-height: 120%;
	}

	@media ${device.sm} {
		font-size: 12px;
	}
`

export const StyledSeparator = styled.span`
	margin: 0 5px;
`

export const StyledIconContainer = styled.div`
	display: flex;
	gap: 26px;

	@media (max-width: 800px) {
		justify-content: center;
	}

	> svg {
		width: 16px;
		height: 16px;
		fill: #6d6e76;
		transition: fill 0.3s ease 0s;
	}

	@media (hover: hover) {
		> svg:hover {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`
