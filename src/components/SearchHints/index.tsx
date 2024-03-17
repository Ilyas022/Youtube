import { StyledHintsBtn, StyledSearchHints } from './styled'

interface ISearchHints {
	isLoading: boolean
	hints: string[]
	onClick: (value: string) => void
}

export const SearchHints = (props: ISearchHints) => {
	const { isLoading, onClick, hints } = props

	return (
		<StyledSearchHints>
			{isLoading ? (
				<StyledHintsBtn>loading</StyledHintsBtn>
			) : (
				hints.length &&
				hints.map((hint) => {
					return (
						<StyledHintsBtn
							data-testid="hint"
							key={hint}
							value={hint}
							type="button"
							onClick={() => onClick(hint)}
						>
							{hint}
						</StyledHintsBtn>
					)
				})
			)}
		</StyledSearchHints>
	)
}
