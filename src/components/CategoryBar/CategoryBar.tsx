import { useState } from 'react'
import { useActions } from 'hooks/useActions'

import { videoCategoryMockValues } from 'utils/mockValues'

import { StyledBtn, StyledBtnContainer, StyledCategoryBar } from './CategoryBar.styles'

const CategoryBar: React.FC = (): JSX.Element => {
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
				{videoCategoryMockValues.map((category) => {
					return (
						<StyledBtn
							key={category.id}
							$isActive={btnCategory === category.id}
							value={category.id}
							onClick={handleClick}
						>
							{category.title}
						</StyledBtn>
					)
				})}
			</StyledBtnContainer>
		</StyledCategoryBar>
	)
}

export default CategoryBar
