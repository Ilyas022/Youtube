import { Icon } from 'components/Icon'

import {
	StyledFooter,
	StyledFooterAffiliation,
	StyledFooterLinks,
	StyledFooterTopic,
	StyledFooterTopics,
	StyledIconContainer,
	StyledSeparator,
} from './styled'

export const Footer: React.FC = (): JSX.Element => {
	return (
		<StyledFooter>
			<StyledFooterLinks>
				<StyledFooterTopics>
					<StyledFooterTopic>
						TermsPrivacyPolicy <StyledSeparator>&</StyledSeparator> Safety How YouTube works <br />
						Test new features
					</StyledFooterTopic>
					<StyledFooterTopic>
						About Press Copyright <br /> Contact us Creators <br /> Advertise Developers
					</StyledFooterTopic>
				</StyledFooterTopics>
				<StyledIconContainer>
					<Icon name="facebook" />
					<Icon name="twiter" />
					<Icon name="instagram" />
					<Icon name="linkedIn" />
				</StyledIconContainer>
			</StyledFooterLinks>
			<StyledFooterAffiliation>2023 Modsen company</StyledFooterAffiliation>
		</StyledFooter>
	)
}

export default Footer
