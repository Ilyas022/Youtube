import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import rootActions from 'store/slice/rootActions'
import { AppDispatch } from 'store/store'

export const useActions = () => {
	const dispatch = useDispatch<AppDispatch>()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
