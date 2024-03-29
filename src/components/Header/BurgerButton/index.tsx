import { StyledBurgerBtn, StyledBurgerInput, StyledBurgerLabel } from './styled'

interface IBurgerButton {
	isOpened: boolean
	setOpened: () => void
}

export const BurgerButton = ({ isOpened, setOpened }: IBurgerButton) => {
	const handleClick = () => {
		setOpened()
	}

	return (
		<StyledBurgerBtn>
			<StyledBurgerInput
				id="menuBurger"
				onChange={handleClick}
				checked={isOpened}
			></StyledBurgerInput>
			<StyledBurgerLabel data-testid="burger btn" htmlFor="menuBurger"></StyledBurgerLabel>
		</StyledBurgerBtn>
	)
}
