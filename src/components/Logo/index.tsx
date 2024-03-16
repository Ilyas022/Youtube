import { Icon } from 'components/Icon'

import { StyledLogo } from './styled'

export const Logo = () => {
	return (
		<StyledLogo>
			<Icon name="youtube" />
			<p data-testid="cypress-logo-text">ModsenFilms</p>
		</StyledLogo>
	)
}
