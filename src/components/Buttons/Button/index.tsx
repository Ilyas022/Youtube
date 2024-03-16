import { StyledBtn } from './styled'

interface IButton {
	onClick: () => void
	text: string
}

export const Button = ({ onClick, text }: IButton) => {
	return <StyledBtn onClick={() => onClick()}>{text}</StyledBtn>
}
