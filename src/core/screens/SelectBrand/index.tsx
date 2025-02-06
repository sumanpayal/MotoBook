import { View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation } from '@react-navigation/native'
import SearchComponent from '@src/common/components/SearchComponent'
import commonMarginStyles from '@src/common/styles/commonMarginStyles'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import SelectModal from './components/SelectModal'
import BrandItem from './components/BrandItem'
import { styles } from './styles'

const brandsData = [
	{
		id: 1,
		title: 'AUDI'
	},
	{
		id: 2,
		title: 'AUDI 1'
	},
	{
		id: 3,
		title: 'AUDI 2'
	},
	{
		id: 4,
		title: 'AUDI dsjkf'
	},
	{
		id: 5,
		title: 'AUDI sdg'
	},
	{
		id: 6,
		title: 'AUDI fetry'
	},
	{
		id: 7,
		title: 'AUDI 7'
	},
	{
		id: 8,
		title: 'AUDI 8'
	},
	{
		id: 9,
		title: 'AUDI 9'
	},
	{
		id: 10,
		title: 'AUDI 10'
	},
	{
		id: 11,
		title: 'AUDI 11'
	},
	{
		id: 12,
		title: 'AUDI 12'
	},
	{
		id: 13,
		title: 'AUDI 13'
	},
	{
		id: 14,
		title: 'AUDI 14'
	},
	{
		id: 16,
		title: 'AUDI 15'
	},
	{
		id: 17,
		title: 'AUDI 15'
	},
	{
		id: 18,
		title: 'AUDI 15'
	},
	{
		id: 19,
		title: 'AUDI 15'
	},
	{
		id: 20,
		title: 'AUDI 15'
	},
	{
		id: 21,
		title: 'AUDI 15'
	},
	{
		id: 22,
		title: 'AUDI 15'
	},
	{
		id: 23,
		title: 'AUDI 15'
	},
	{
		id: 24,
		title: 'AUDI 15'
	},
	{
		id: 25,
		title: 'AUDI 15'
	},
	{
		id: 26,
		title: 'AUDI 15'
	}
]

const SelectBrand = () => {
	const navigation: any = useNavigation()

	const [searchText, setSearchText] = useState<string>('')

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const [allBrandsData, setAllBrandsData] = useState<any[]>(brandsData)
	const [searchedBrandsData, setSearchedBrandsData] = useState<any[]>(brandsData)

	useEffect(() => {
		setAllBrandsData(brandsData)
	})

	useEffect(() => {
		searchItemLocally()
	}, [searchText])

	const searchItemLocally = async () => {
		const data =
			allBrandsData?.length > 0
				? allBrandsData?.filter((item: any) => {
						return searchText?.length > 0 ? item?.title?.toLowerCase().includes(searchText?.toLowerCase()) : true
				  })
				: allBrandsData
		setSearchedBrandsData(data)
	}

	const RenderBrandItem = ({ item }: { item: any }) => {
		return <BrandItem item={item} onPress={() => setIsModalVisible(true)} />
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Select Your Brand'>
			<View style={styles.main}>
				<View style={commonMarginStyles.marginVerticalM}>
					<SearchComponent searchText={searchText} handleSearch={setSearchText} clearSearch={() => setSearchText('')} />
				</View>
				<FlatList data={searchedBrandsData} renderItem={RenderBrandItem} keyExtractor={(item: any) => item?.id} numColumns={4} columnWrapperStyle={{ gap: scaleWidthPX(16) }} contentContainerStyle={searchedBrandsData.length === 0 && styles.center} ListEmptyComponent={NoRecordFound} />
			</View>
			{isModalVisible && (
				<SelectModal
					selectedItem={null}
					title='Select Modal'
					subHeaderTitle='Hyundai'
					visible={isModalVisible}
					onClose={() => {
						setIsModalVisible(false)
					}}
					setSelectedItem={() => {}}
					data={brandsData}
				/>
			)}
		</MainFrame>
	)
}

export default SelectBrand
