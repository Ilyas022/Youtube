import FbIcon from 'components/icons/FbIcon'
import IgIcon from 'components/icons/IgIcon'
import TwIcon from 'components/icons/TwIcon'
import InIcon from 'components/icons/InIcon'

import {
	StyledFooter,
	StyledFooterAffiliation,
	StyledFooterLinks,
	StyledFooterTopic,
	StyledFooterTopics,
	StyledIconContainer,
	StyledSeparator,
} from './Footer.styles'

const Footer: React.FC = (): JSX.Element => {
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
					<FbIcon />
					<TwIcon />
					<IgIcon />
					<InIcon />
				</StyledIconContainer>
			</StyledFooterLinks>
			<StyledFooterAffiliation>2023 Modsen company</StyledFooterAffiliation>
		</StyledFooter>
	)
}

export default Footer
