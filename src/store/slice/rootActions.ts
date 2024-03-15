import filterSlice from 'store/slice/filterSlice'

import themeSlice from './themeSlice'

const rootActions = {
	...filterSlice.actions,
	...themeSlice.actions,
}

export default rootActions
