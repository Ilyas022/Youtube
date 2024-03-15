import { StyledBtn } from './styled'

interface IButton {
	onClick: () => void
	text: string
}

const Button: React.FC<IButton> = ({ onClick, text }: IButton): JSX.Element => {
	return <StyledBtn onClick={() => onClick()}>{text}</StyledBtn>
}

export default Button
