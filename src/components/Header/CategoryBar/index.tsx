import { memo, useState } from 'react'

import { useActions } from 'hooks/useActions'
import { videoCategoryMockValues } from 'utils/mockValues'

import { StyledBtn, StyledBtnContainer, StyledCategoryBar } from './styled'

export const CategoryBar = memo(() => {
	const { setCategory } = useActions()
	const [btnCategory, setBtnCategory] = useState(videoCategoryMockValues[0].id)

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const value = (e.target as HTMLButtonElement).value
		setBtnCategory(value)
		setCategory(value)
	}

	return (
		<StyledCategoryBar>
			<StyledBtnContainer>
				{videoCategoryMockValues.map(({ id, title }) => {
					return (
						<StyledBtn key={id} $isActive={btnCategory === id} value={id} onClick={handleClick}>
							{title}
						</StyledBtn>
					)
				})}
			</StyledBtnContainer>
		</StyledCategoryBar>
	)
})

CategoryBar.displayName = 'CategoryBar'
