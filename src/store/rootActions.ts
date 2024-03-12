import filterSlice from 'store/filterSlice'
import themeSlice from './themeSlice'

const rootActions = {
	...filterSlice.actions,
	...themeSlice.actions,
}

export default rootActions
