import { useState } from 'react'

import { BurgerButton } from 'components/Header/BurgerButton'
import { CategoryBar } from 'components/Header/CategoryBar'
import { Logo } from 'components/Header/Logo'
import { PhoneMenu } from 'components/Header/PhoneMenu'
import { SearchBar } from 'components/Header/SearchBar'
import { ThemeToggler } from 'components/Header/ThemeToggler'

import { StyledBottomWrapper, StyledHeader, StyledTopWrapper } from './styled'

export const Header = () => {
	const [isMenuOpened, setMenuOpened] = useState(false)

	const handleOpen = () => {
		setMenuOpened((prev) => !prev)
	}

	return (
		<StyledHeader>
			<StyledTopWrapper>
				<Logo />
				<SearchBar />
				<ThemeToggler isMenuOpened={isMenuOpened} />
				<BurgerButton isOpened={isMenuOpened} setOpened={handleOpen} />
			</StyledTopWrapper>
			<StyledBottomWrapper>
				<CategoryBar />
			</StyledBottomWrapper>
			<PhoneMenu isOpened={isMenuOpened} />
		</StyledHeader>
	)
}
