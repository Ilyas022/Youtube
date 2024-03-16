import { StyledBurgerBtn, StyledBurgerInput, StyledBurgerLabel } from './styled'

interface IBurgerButton {
	isOpened: boolean
	setOpened: () => void
}

export const BurgerButton: React.FC<IBurgerButton> = ({
	isOpened,
	setOpened,
}: IBurgerButton): JSX.Element => {
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
