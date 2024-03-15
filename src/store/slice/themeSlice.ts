import { createSlice } from '@reduxjs/toolkit'
import { light } from '../../global.styles'
import { IThemeColors } from 'types/interfaces'

interface IInitialState {
	theme: {
		name: string
		colors: IThemeColors
	}
}

const initialState: IInitialState = {
	theme: light,
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action) => {
			state.theme = action.payload
		},
	},
})

export default themeSlice
