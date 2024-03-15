import CategoryBar from 'components/CategoryBar'
import Logo from 'components/Logo'
import SearchBar from 'components/SearchBar'
import ThemeToggler from 'components/ThemeToggler'

import { StyledBottomWrapper, StyledHeader, StyledTopWrapper } from './styled'
import BurgerButton from 'components/Buttons/BurgerButton'
import PhoneMenu from 'components/Menu'
import { useState } from 'react'

const Header: React.FC = (): JSX.Element => {
	const [isMenuOpened, setMenuOpened] = useState(false)
	return (
		<StyledHeader>
			<StyledTopWrapper>
				<Logo />
				<SearchBar />
				<ThemeToggler />
				<BurgerButton isOpened={isMenuOpened} setOpened={() => setMenuOpened((prev) => !prev)} />
			</StyledTopWrapper>
			<StyledBottomWrapper>
				<CategoryBar />
			</StyledBottomWrapper>
			<PhoneMenu isOpened={isMenuOpened} />
		</StyledHeader>
	)
}

export default Header
