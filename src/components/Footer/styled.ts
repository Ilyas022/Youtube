import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { ThemeFonts } from 'src/constants/fonts'
import { flex, fonts } from 'src/styles/mixins'

export const StyledFooter = styled.footer`
	padding-bottom: 20px;
`

export const StyledFooterLinks = styled.div`
	${flex({ justifyContent: 'space-between' })}
	margin-bottom: 44px;
	padding: 0 11px 0 36px;

	@media ${device.semiMd} {
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
	${fonts(ThemeFonts.medium)}

	@media ${device.md} {
		flex-basis: 43%;
		${fonts(ThemeFonts.small)}
	}

	@media ${device.md} {
		font-size: 14px;
	}
`

export const StyledFooterAffiliation = styled.p`
	color: ${({ theme }) => theme.colors.textLight};
	text-align: center;
	${fonts(ThemeFonts.large)}

	@media ${device.md} {
		${fonts({ fontSize: '22px', lineHeight: '120%' })}
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

	@media ${device.semiMd} {
		justify-content: center;
	}

	> svg {
		width: 16px;
		height: 16px;
		fill: ${({ theme }) => theme.colors.icon};
		transition: fill 0.3s ease 0s;
	}

	@media (hover: hover) {
		> svg:hover {
			fill: ${({ theme }) => theme.colors.primary};
		}
	}
`
