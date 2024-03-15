import { useState } from 'react'

import { dark, light } from 'constants/theme'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'

import {
	StyledThemneToggler,
	StyledToggleInput,
	StyledToggleLabel,
	StyledToggleSpan,
} from './styled'

const ThemeToggler: React.FC = (): JSX.Element => {
	const { setTheme } = useActions()
	const { name: themeName } = useTypedSelector((state) => state.theme.theme)

	const [isToggled, setIsToggled] = useState<boolean>(themeName === 'dark' ? true : false)
	const onToggle = () => {
		setIsToggled(!isToggled)
		setTheme(isToggled ? light : dark)
	}

	return (
		<StyledThemneToggler>
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

export default ThemeToggler
