import React, { memo, useRef, useState } from 'react'

import { ErrorBoundary } from 'components/ErrorBoundary'
import { StyledWrongText } from 'components/FilmCards/styled'
import { SearchHints } from 'components/Header/SearchBar/SearchHints'
import { StyledHintsBtn } from 'components/Header/SearchBar/SearchHints/styled'
import { Icon } from 'components/Icon'
import { useActions } from 'hooks/useActions'
import { useDebounce } from 'hooks/useDebounce'
import useOnClickOutside, { AnyEvent } from 'hooks/useOnClickOutside'
import { useGetVideoSuggestionsQuery } from 'store/api/api'

import {
	StyledForm,
	StyledSearchBtn,
	StyledSearchContainer,
	StyledSearchHints,
	StyledSearchInput,
} from './styled'

export const SearchBar = memo(() => {
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
	const isShowHints = hints && inputActive

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

	const handleHintClick = (value: string) => {
		setSearch(value)
		setQuery(value)
		ref.current?.blur()
		setInputActive(false)
	}

	const handleInputFocus = () => setInputActive(true)
	const handleInputSubmit = () => {
		handleSubmit()
	}

	return (
		<StyledForm onSubmit={handleSubmit}>
			<StyledSearchContainer>
				<StyledSearchInput
					ref={ref}
					placeholder="Search"
					value={search}
					onChange={handleChange}
					onSubmit={handleInputSubmit}
					onFocus={handleInputFocus}
				/>
				<ErrorBoundary
					fallback={<StyledWrongText>Something went wrong with search hints</StyledWrongText>}
				>
					{isShowHints && (
						<StyledSearchHints>
							<SearchHints isLoading={isLoading} hints={hints} onClick={handleHintClick} />
						</StyledSearchHints>
					)}
				</ErrorBoundary>
			</StyledSearchContainer>
			<StyledSearchBtn data-testid="search submit button">
				<Icon name="search" />
			</StyledSearchBtn>
		</StyledForm>
	)
})

SearchBar.displayName = 'SearchBar'
