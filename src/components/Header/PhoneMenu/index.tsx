import { useEffect } from 'react'

import { useScrollLock } from 'hooks/useScrollLock'

import { StyledPhoneMenu } from './styled'

interface IPhoneMenu {
	isOpened: boolean
}

export const PhoneMenu = ({ isOpened }: IPhoneMenu) => {
	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		if (isOpened) {
			lockScroll()
		}

		return () => unlockScroll()
	}, [lockScroll, unlockScroll, isOpened])

	return (
		<StyledPhoneMenu $open={isOpened} data-testid="mobile menu">
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?</p>
		</StyledPhoneMenu>
	)
}
