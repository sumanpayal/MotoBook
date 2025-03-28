import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
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
	headerChildren?: React.ReactNode | undefined
}

const SelectModal = (props: SelectModalProps) => {
	const { visible, onClose = () => {}, data, title, modalProps, setSelectedItem, headerChildren } = props

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
			<View style={{ marginBottom: scaleHeightPX(16) }}>
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

	return (
		<BottomModal visible={visible} onDrop={onPressClose} isHeader headerTitle={title} headerCloseOnPress={onPressClose} containerStyle={styles.containerStyle} {...modalProps} hideOnBackdropPress={false} headerChildren={headerChildren}>
			<View style={styles.main}>
				{listHeaderComponent()}
				<ScrollView showsVerticalScrollIndicator={false}>
					{flatListData?.length > 0 && (
						<View style={styles.container}>
							{flatListData?.map((item: any) => (
								<BrandItem item={item} onPress={() => setSelectedItem(item)} key={item?._id} isModal />
							))}
						</View>
					)}
				</ScrollView>
				{flatListData?.length === 0 && (
					<View style={styles.center}>
						<NoRecordFound />
					</View>
				)}
			</View>
		</BottomModal>
	)
}

export default SelectModal

const styles = StyleSheet.create({
	main: {
		marginHorizontal: scaleWidthPX(20),
		flex: 1
	},
	container: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		gap: scaleWidthPX(18),
		marginTop: scaleHeightPX(8)
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	containerStyle: {
		height: '78%'
	}
})
