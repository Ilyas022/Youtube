import { useEffect } from 'react'

import { useScrollLock } from 'hooks/useScrollLock'

import { StyledPhoneMenu } from './styled'

interface IPhoneMenu {
	isOpened: boolean
}

export const PhoneMenu: React.FC<IPhoneMenu> = ({ isOpened }: IPhoneMenu): JSX.Element => {
	const [lockScroll, unlockScroll] = useScrollLock()

	useEffect(() => {
		if (isOpened) {
			lockScroll()
		}

		return () => unlockScroll()
	}, [lockScroll, unlockScroll, isOpened])

	return (
		<StyledPhoneMenu $open={isOpened}>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, nobis?</p>
		</StyledPhoneMenu>
	)
}
