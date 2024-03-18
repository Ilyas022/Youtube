import { useState } from 'react'

import { dark, light } from 'constants/theme'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectTheme } from 'store/selectors'

import {
	StyledThemneToggler,
	StyledToggleInput,
	StyledToggleLabel,
	StyledToggleSpan,
} from './styled'

interface IThemeToggler {
	isMenuOpened: boolean
}

export const ThemeToggler = ({ isMenuOpened }: IThemeToggler) => {
	const { setTheme } = useActions()
	const { name: themeName } = useTypedSelector(selectTheme)

	const [isToggled, setIsToggled] = useState<boolean>(() => (themeName === 'dark' ? true : false))
	const onToggle = () => {
		setIsToggled(!isToggled)
		setTheme(isToggled ? light : dark)
	}

	return (
		<StyledThemneToggler $isMenuOpened={isMenuOpened}>
			<StyledToggleLabel className="toggle-switch">
				<StyledToggleInput
					data-testid="toggler"
					type="checkbox"
					checked={isToggled}
					onChange={onToggle}
				/>
				<StyledToggleSpan className="switch" />
			</StyledToggleLabel>
		</StyledThemneToggler>
	)
}
