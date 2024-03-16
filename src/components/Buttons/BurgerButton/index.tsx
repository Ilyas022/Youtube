import { StyledBurgerBtn, StyledBurgerInput, StyledBurgerLabel } from './styled'

interface IBurgerButton {
	isOpened: boolean
	setOpened: () => void
}

export const BurgerButton = ({ isOpened, setOpened }: IBurgerButton) => {
	return (
		<StyledBurgerBtn>
			<StyledBurgerInput
				id="menuBurger"
				onChange={() => setOpened()}
				checked={isOpened}
			></StyledBurgerInput>
			<StyledBurgerLabel htmlFor="menuBurger"></StyledBurgerLabel>
		</StyledBurgerBtn>
	)
}
