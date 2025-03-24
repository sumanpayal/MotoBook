import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import BottomModal from '../BottomModal'
import CustomText from '../Text'
import { selectionModalStyles } from './styles'
import SearchComponent from '../SearchComponent'
import { NoRecordFound } from '../NoRecordFound'
import { SingleSelectionModalProps } from './types'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'

const SingleSelectionModal = (props: SingleSelectionModalProps) => {
	const { visible, onClose = () => {}, data, title, titleItem = 'title', idItem = 'id', isSeperator = false, isIcon = false, isIconIsImage = false, selectedItem, setSelectedItem, isSearch = true, noRecordViewProps, modalProps, children } = props

	const { colors } = useTheme()
	const styles = selectionModalStyles(colors)

	const [searchText, setSearchText] = useState<string>('')
	const [flatListData, setFlatListData] = useState<any[]>(data)

	const searchData = (text: string) => {
		const search = text.toLowerCase()
		const filterData = data?.filter((item: any) => `${item[titleItem]}`.toLowerCase().includes(search))
		setFlatListData(filterData)
	}

	const onPressClose = () => {
		setSearchText('')
		setFlatListData(data)
		onClose()
	}

	useEffect(() => {
		setFlatListData(data)
	}, [data])

	const onPressSelectItem = (item: any) => {
		setSelectedItem(item)
		setSearchText('')
		setFlatListData(data)
	}

	const renderItem = ({ item }: { item: any }) => {
		const Icon = isIcon && item?.icon
		const selected = selectedItem?.[idItem]?.toString() === item?.[idItem]?.toString()
		return (
			<Pressable style={styles.itemContent} onPress={() => onPressSelectItem(item)}>
				<View style={[styles.itemLeft, isIconIsImage && styles.itemLeftImage]}>
					{children && children(item)}
					{isIcon && (isIconIsImage ? <Image source={{ uri: Icon }} style={styles.itemImage} /> : <Icon />)}
					<CustomText style={styles.itemLabel}>{item[titleItem]}</CustomText>
				</View>
				<View style={styles.itemRight}>
					<View style={styles.selectedViewOuter}>{selected && <View style={styles.selectedViewInner} />}</View>
				</View>
			</Pressable>
		)
	}

	const listHeaderComponent = () => {
		return (
			<View style={styles.search}>
				<SearchComponent
					searchText={searchText}
					handleSearch={(text: string) => {
						setSearchText(text)
						searchData(text)
					}}
					clearSearch={() => {
						setSearchText('')
						searchData('')
					}}
				/>
			</View>
		)
	}

	const listSeperatorComponent = () => {
		return isSeperator ? <View style={styles.itemSeparator} /> : null
	}

	return (
		<BottomModal visible={visible} onDrop={onPressClose} isHeader headerTitle={title} headerCloseOnPress={onPressClose} containerStyle={isSearch ? styles.containerStyle : {}} {...modalProps} hideOnBackdropPress={false}>
			{isSearch && listHeaderComponent()}
			<FlatList data={flatListData} renderItem={renderItem} keyExtractor={(item) => `${item[idItem]}`} ItemSeparatorComponent={listSeperatorComponent} ListEmptyComponent={() => <NoRecordFound {...noRecordViewProps} />} contentContainerStyle={[styles.listStyle, flatListData?.length === 0 && styles.listStyleEmpty, flatListData?.length === 0 && !isSearch && { marginTop: scaleHeightPX(22) }, flatListData?.length === 0 && isSearch && { flex: 1 }]} />
		</BottomModal>
	)
}

export default SingleSelectionModal
