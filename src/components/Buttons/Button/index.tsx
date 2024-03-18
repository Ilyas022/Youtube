import { memo } from 'react'

import { StyledBtn } from './styled'

interface IButton {
	onClick: () => void
	text: string
}

export const Button = memo(({ onClick, text }: IButton) => {
	const handleClick = () => {
		onClick()
	}

	return <StyledBtn onClick={handleClick}>{text}</StyledBtn>
})

Button.displayName = 'Button'
