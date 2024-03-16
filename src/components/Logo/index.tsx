import { Icon } from 'components/Icon'

import { StyledLogo } from './styled'

export const Logo: React.FC = (): JSX.Element => {
	return (
		<StyledLogo>
			<Icon name="youtube" />
			<p data-testid="cypress-logo-text">ModsenFilms</p>
		</StyledLogo>
	)
}
