import 'styled-components'
import { IThemeColors } from './interfaces'

declare module 'styled-components' {
	export interface DefaultTheme {
		name: string
		colors: IThemeColors
	}
}
