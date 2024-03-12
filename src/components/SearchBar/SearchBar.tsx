import React, { useRef, useState } from 'react'

import { useDebounce } from 'hooks/useDebounce'
import useOnClickOutside, { AnyEvent } from 'hooks/useOnClickOutside'
import { useGetVideoSuggestionsQuery } from 'store/api'
import { useActions } from 'hooks/useActions'

import SearchHints from 'components/SearchHints/SearchHints'

import {
	StyledForm,
	StyledSearchBtn,
	StyledSearchContainer,
	StyledSearchHints,
	StyledSearchInput,
} from './SearchBar.styles'
import { StyledHintsBtn } from 'components/SearchHints/SearchHints.styles'
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary'
import { StyledWrongText } from 'components/FilmCards/FilmCards.styles'
import SearchIcon from 'components/icons/SearchIcon'

const SearchBar: React.FC = (): JSX.Element => {
	const [search, setSearch] = useState('')
	const [inputActive, setInputActive] = useState(false)
	const debouncedSearch = useDebounce(search)
	const { setTitle: setQuery } = useActions()
	const ref = useRef<null | HTMLInputElement>(null)

	const closeHintsHandler = (e: AnyEvent) => {
		if (
			typeof (e?.target as HTMLElement).className === 'string' &&
			!(e?.target as HTMLElement).className.includes(StyledHintsBtn.styledComponentId)
		) {
			setInputActive(false)
		}
	}

	useOnClickOutside(ref, (e) => closeHintsHandler(e))
	const { data: hints } = useGetVideoSuggestionsQuery(debouncedSearch)

	const isLoading = false

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const handleSubmit = (e?: React.FormEvent<HTMLFormElement>) => {
		e?.preventDefault()
		setInputActive(false)
		ref.current?.blur()
		setInputActive(false)
		setQuery(search)
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledSearchContainer>
				<StyledSearchInput
					ref={ref}
					placeholder="Search"
					value={search}
					onChange={handleChange}
					onSubmit={() => {
						handleSubmit()
					}}
					onFocus={() => setInputActive(true)}
				/>
				<ErrorBoundary
					fallback={<StyledWrongText>Something went wrong with search hints</StyledWrongText>}
				>
					{hints && inputActive && (
						<StyledSearchHints>
							<SearchHints
								isLoading={isLoading}
								hints={hints}
								onClick={(value) => {
									setSearch(value)
									setQuery(value)
									ref.current?.blur()
									setInputActive(false)
								}}
							/>
						</StyledSearchHints>
					)}
				</ErrorBoundary>
			</StyledSearchContainer>
			<StyledSearchBtn data-testid="search submit button">
				<SearchIcon />
			</StyledSearchBtn>
		</StyledForm>
	)
}

export default SearchBar
