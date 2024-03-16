import { StyledBtn } from './styled'

interface IButton {
	onClick: () => void
	text: string
}

export const Button: React.FC<IButton> = ({ onClick, text }: IButton): JSX.Element => {
	return <StyledBtn onClick={() => onClick()}>{text}</StyledBtn>
}
