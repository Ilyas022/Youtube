import { StyledBtn } from './styled'

interface IButton {
	onClick: () => void
	text: string
}

export const Button = ({ onClick, text }: IButton) => {
	const handleClick = () => {
		onClick()
	}

	return <StyledBtn onClick={handleClick}>{text}</StyledBtn>
}
