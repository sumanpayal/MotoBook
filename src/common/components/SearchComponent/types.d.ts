interface SearchProps {
	searchText: string
	handleSearch?: (text: string) => void
	clearSearch?: () => void
	autoFocus?: boolean
	placeholder?: string
}
