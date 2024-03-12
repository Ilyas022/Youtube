import { StyledBurgerBtn, StyledBurgerInput, StyledBurgerLabel } from './BurgerButton.styles'

interface IBurgerButton {
	isOpened: boolean
	setOpened: () => void
}

const BurgerButton: React.FC<IBurgerButton> = ({
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

export default BurgerButton
