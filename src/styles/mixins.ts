import { css } from 'styled-components'

export const flex = ({
	alignItems,
	justifyContent,
	flexDirection,
}: {
	alignItems?: string
	justifyContent?: string
	flexDirection?: string
}) => css`
	display: flex;
	${alignItems && `align-items: ${alignItems};`}
	${flexDirection && `flex-direction: ${flexDirection};`}
	${justifyContent && `justify-content: ${justifyContent};`}
`

export const fonts = ({
	fontSize,
	lineHeight,
	fontWeight,
}: {
	fontSize?: string
	lineHeight?: string
	fontWeight?: string
}) => css`
	${fontSize && `font-size: ${fontSize};`}
	${lineHeight && `line-height: ${lineHeight};`}
	${fontWeight && `font-weight: ${fontWeight};`}
`
