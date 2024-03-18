import { useState } from 'react'

import { BurgerButton } from 'components/Buttons/BurgerButton'
import { CategoryBar } from 'components/CategoryBar'
import { Logo } from 'components/Logo'
import { PhoneMenu } from 'components/Menu'
import { SearchBar } from 'components/SearchBar'
import { ThemeToggler } from 'components/ThemeToggler'

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
				<ThemeToggler />
				<BurgerButton isOpened={isMenuOpened} setOpened={handleOpen} />
			</StyledTopWrapper>
			<StyledBottomWrapper>
				<CategoryBar />
			</StyledBottomWrapper>
			<PhoneMenu isOpened={isMenuOpened} />
		</StyledHeader>
	)
}
