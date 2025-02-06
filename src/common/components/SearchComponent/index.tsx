import React from 'react'
import { Pressable, TextInput, View } from 'react-native'
import createStyles from './styles'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'

export default function SearchComponent(props: SearchProps) {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const { autoFocus, searchText, handleSearch, clearSearch, placeholder = 'Search...' } = props

	return (
		<View style={styles.searchContainer}>
			<Icon name='search1' size={22} color={colors.textColor} />
			<TextInput style={[styles.input, searchText?.trim().length === 0 && styles.inputPlaceholder]} placeholder={placeholder} placeholderTextColor={colors.inputPlaceholder} value={searchText} onChangeText={handleSearch} autoFocus={autoFocus} numberOfLines={1} returnKeyType='search' />
			{searchText && searchText?.length > 0 ? (
				<Pressable onPress={clearSearch} style={styles.clearButton}>
					<Icon name='close' size={22} color={colors.textColor} />
				</Pressable>
			) : null}
		</View>
	)
}
