import React from 'react'
import { Pressable, TextInput, View } from 'react-native'
import createStyles from './styles'
import { useTheme } from '@react-navigation/native'
import { CloseSVG, SearchSVG } from '@src/assets/svg'

export default function SearchComponent(props: SearchProps) {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const { autoFocus, searchText, handleSearch, clearSearch, placeholder = 'Search' } = props

	return (
		<View style={styles.searchContainer}>
			<SearchSVG />
			<TextInput style={[styles.input, searchText?.trim().length === 0 && styles.inputPlaceholder]} placeholder={placeholder} placeholderTextColor={colors.inputPlaceholder} value={searchText} onChangeText={handleSearch} autoFocus={autoFocus} numberOfLines={1} returnKeyType='search' />
			{searchText && searchText?.length > 0 ? (
				<Pressable onPress={clearSearch} style={styles.clearButton}>
					<CloseSVG width={32} height={32} />
				</Pressable>
			) : null}
		</View>
	)
}
