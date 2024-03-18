import styled from 'styled-components'

import { ThemeFonts } from 'src/constants/fonts'
import { fonts } from 'src/styles/mixins'

export const StyledErrorMessage = styled.p`
	${fonts(ThemeFonts.large)}
	text-align: center;
`
