import YtIcon from 'components/icons/YtIcon'
import { StyledLogo } from './styled'

const Logo: React.FC = (): JSX.Element => {
	return (
		<StyledLogo>
			<YtIcon />
			<p data-testid="cypress-logo-text">ModsenFilms</p>
		</StyledLogo>
	)
}

export default Logo
