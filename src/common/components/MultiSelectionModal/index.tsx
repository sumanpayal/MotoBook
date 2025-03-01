import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import BottomModal from '../BottomModal'
import CustomText from '../Text'
import { selectionModalStyles } from './styles'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import SearchComponent from '../SearchComponent'
import { NoRecordFound } from '../NoRecordFound'
import { MultiSelectionModalProps } from './types'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import Icon from 'react-native-vector-icons/AntDesign'

const MultiSelectionModal = (props: MultiSelectionModalProps) => {
	const { visible, onClose = () => {}, data, title, titleItem = 'title', idItem = 'id', isSeperator = false, isIcon = false, isIconIsImage = false, isSearch = true, noRecordViewProps, modalProps, children, setSelectedItem } = props

	const { colors } = useTheme()
	const styles = selectionModalStyles(colors)

	const [searchText, setSearchText] = useState<string>('')
	const [flatListData, setFlatListData] = useState<any[]>(data)
	const [allData, setAllData] = useState<any[]>(data)

	const searchData = (text: string) => {
		const search = text.toLowerCase()
		const filterData = data?.filter((item: any) => `${item[titleItem]}`.toLowerCase().includes(search))
		setFlatListData(filterData)
	}

	const onPressSelectDone = () => {
		setSelectedItem(allData)
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
		const newData = flatListData?.map((i: any) => (i?.[idItem]?.toString() === item?.[idItem]?.toString() ? { ...i, isSelected: !i?.isSelected } : i))
		const newData1 = allData?.map((i: any) => (i?.[idItem]?.toString() === item?.[idItem]?.toString() ? { ...i, isSelected: !i?.isSelected } : i))
		setSearchText('')
		setFlatListData([...newData])
		setAllData([...newData1])
	}

	const renderItem = ({ item }: { item: any }) => {
		const IconLeft = isIcon && item?.icon
		return (
			<Pressable style={styles.itemContent} onPress={() => onPressSelectItem(item)}>
				<View style={[styles.itemLeft, isIconIsImage && styles.itemLeftImage]}>
					{children && children(item)}
					{isIcon && (isIconIsImage ? <Image source={{ uri: IconLeft }} style={styles.itemImage} /> : <IconLeft />)}
					<CustomText style={styles.itemLabel}>{item[titleItem]}</CustomText>
				</View>
				<View style={styles.itemRight}>
					<View style={styles.selectedViewOuter}>{item?.isSelected && <Icon name='check' size={16} color={colors.textColor} />}</View>
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
		<BottomModal visible={visible} onDrop={onPressClose} isHeader headerTitle={title} headerCloseOnPress={onPressClose} containerStyle={isSearch ? styles.containerStyle : {}} {...modalProps} hideOnBackdropPress={false} isLeftIcon headerLeftOnPress={onPressSelectDone}>
			{isSearch && listHeaderComponent()}
			<FlatList data={flatListData} renderItem={renderItem} keyExtractor={(item) => `${item[idItem]}`} ItemSeparatorComponent={listSeperatorComponent} ListEmptyComponent={() => <NoRecordFound {...noRecordViewProps} />} contentContainerStyle={[styles.listStyle, flatListData?.length === 0 && styles.listStyleEmpty, flatListData?.length === 0 && !isSearch && commonMarginStyles.marginTop2XL, flatListData?.length === 0 && isSearch && commonFlexStyles.flex1]} />
		</BottomModal>
	)
}

export default MultiSelectionModal
