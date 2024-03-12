import React from 'react'

export const useScrollLock = () => {
	const lockScroll = React.useCallback(() => {
		document.body.style.overflow = 'hidden'
		document.body.style.touchAction = 'none'
	}, [])

	const unlockScroll = React.useCallback(() => {
		document.body.style.overflow = 'unset'
		document.body.style.touchAction = 'unset'
	}, [])

	return [lockScroll, unlockScroll]
}
