import CategoryBar from 'components/CategoryBar/CategoryBar'
import Logo from 'components/Logo/Logo'
import SearchBar from 'components/SearchBar/SearchBar'
import ThemeToggler from 'components/ThemeToggler/ThemeToggler'

import { StyledBottomWrapper, StyledHeader, StyledTopWrapper } from './Header.styles'
import BurgerButton from 'components/Buttons/BurgerButton/BurgerButton'
import PhoneMenu from 'components/Menu/PhoneMenu'
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
