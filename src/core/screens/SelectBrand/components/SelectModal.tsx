import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import commonAlignStyles from '@src/common/styles/commonAlignStyles'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import BottomModal from '@src/common/components/BottomModal'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import SearchComponent from '@src/common/components/SearchComponent'
import { BottomModalProps } from '@src/common/components/BottomModal/types'
import BrandItem from './BrandItem'

type SelectModalProps = {
	data: any[]
	visible: boolean
	onClose: () => void
	title: string
	selectedItem: any | null
	setSelectedItem: (item: any) => void
	modalProps?: BottomModalProps
	subHeaderTitle?: string
}

const SelectModal = (props: SelectModalProps) => {
	const { visible, onClose = () => { }, data, title, modalProps, subHeaderTitle, setSelectedItem } = props

	const [searchText, setSearchText] = useState<string>('')
	const [flatListData, setFlatListData] = useState<any[]>(data)

	const searchData = (text: string) => {
		const search = text.toLowerCase()
		const filterData = data?.filter((item: any) => `${item?.name}`.toLowerCase().includes(search))
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

	const listHeaderComponent = () => {
		return (
			<View style={commonMarginStyles.marginVerticalM}>
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

	const RenderBrandItem = ({ item }: { item: any }) => {
		return <BrandItem item={item} onPress={() => setSelectedItem(item)} />
	}

	return (
		<BottomModal visible={visible} onDrop={onPressClose} isHeader headerTitle={title} subHeaderTitle={subHeaderTitle} headerCloseOnPress={onPressClose} containerStyle={styles.containerStyle} {...modalProps} hideOnBackdropPress={false}>
			<View style={styles.main}>
				{listHeaderComponent()}
				<ScrollView>
					{flatListData?.length > 0 && <View style={styles.container}>
						{flatListData?.map((item: any) => {
							return (
								<View key={item?._id}>
									<RenderBrandItem item={item} />
								</View>
							)
						})}
					</View>}
				</ScrollView>
				{flatListData?.length === 0 && <View style={styles.center}><NoRecordFound /></View>}
			</View>
		</BottomModal>
	)
}

export default SelectModal

const styles = StyleSheet.create({
	main: {
		...commonMarginStyles.marginHorizontalM,
		...commonFlexStyles.flex1
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: scaleWidthPX(16)
	},
	center: {
		...commonAlignStyles.justifyCenter,
		...commonAlignStyles.alignCenter,
		...commonFlexStyles.flex1
	},
	containerStyle: {
		minHeight: '60%'
	}
})
