import { RootState } from './store'

export const selectFilters = (state: RootState) => state.filters
export const selectTheme = (state: RootState) => state.theme.theme
