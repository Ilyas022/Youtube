import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
	title: string
	category: string
}

const initialState: IInitialState = {
	title: '',
	category: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setTitle: (state, action) => {
			state.title = action.payload
		},
		setCategory: (state, action) => {
			state.category = action.payload
		},
	},
})

export default filterSlice
