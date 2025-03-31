import { View, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation, useTheme } from '@react-navigation/native'
import SearchComponent from '@src/common/components/SearchComponent'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import SelectModal from './components/SelectModal'
import BrandItem from './components/BrandItem'
import { styles } from './styles'
import { getCarModalsListAPIForCompanyID, getCompaniesListAPI } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { BASE_URL } from '@src/network/apiClient'

const SelectBrand = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()

	const [searchText, setSearchText] = useState<string>('')

	const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

	const [allBrandsData, setAllBrandsData] = useState<any[]>([])
	const [searchedBrandsData, setSearchedBrandsData] = useState<any[]>([])

	const [carModalsData, setCardModalsData] = useState<any[]>([])

	const [selectedCarCompany, setSelectedCarCompany] = useState<any | null>(null)

	useEffect(() => {
		dispatch(setIsFullScreenLoading(true))
		getCompaniesListAPI((res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res.data) {
				setAllBrandsData(res.data)
				setSearchedBrandsData(res.data)
			}
			else {
				setAllBrandsData([])
				setSearchedBrandsData([])
			}
		})
	}, [])

	useEffect(() => {
		searchItemLocally()
	}, [searchText])

	const searchItemLocally = async () => {
		const data =
			allBrandsData?.length > 0
				? allBrandsData?.filter((item: any) => {
					return searchText?.length > 0 ? item?.name?.toLowerCase().includes(searchText?.toLowerCase()) : true
				})
				: allBrandsData
		setSearchedBrandsData(data)
	}

	const onPressItem = (item: any) => {
		setSelectedCarCompany(item)
		getCarModalsListAPIForCompanyID(item?._id, (res: API_RESPONSE) => {
			if (res.data) {
				setCardModalsData(res.data)
				setIsModalVisible(true)
			} else {
				setSelectedCarCompany(null)
			}
		})
	}

	const onCloseCarModal = () => {
		setSelectedCarCompany(null)
		setCardModalsData([])
		setIsModalVisible(false)
	}

	const renderHeaderChildren = () => {
		return (
			<Image source={{ uri: `${BASE_URL}/${selectedCarCompany?.image}` }} style={{ width: scaleWidthPX(64), height: scaleWidthPX(64), borderRadius: 100, marginTop: scaleHeightPX(8), backgroundColor: colors.inputBackground }} />
		)
	}

	const selectModalAndNavigateToAddVehicle = (item: any) => {
		navigation.navigate('VehicleForm', { carModal: item, carCompany: selectedCarCompany })
		onCloseCarModal()
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Select Your Brand' isNotifications={false}>
			<View style={styles.main}>
				<View style={{ marginVertical: scaleHeightPX(16) }}>
					<SearchComponent searchText={searchText} handleSearch={setSearchText} clearSearch={() => setSearchText('')} placeholder='Search by brand' />
				</View>
				<ScrollView showsVerticalScrollIndicator={false}>
					{searchedBrandsData?.length > 0 && (
						<View style={styles.container}>
							{searchedBrandsData?.map((item: any) => (
								<BrandItem key={item?._id} item={item} onPress={() => onPressItem(item)} selected={selectedCarCompany} />
							))}
						</View>
					)}
				</ScrollView>
				{searchedBrandsData?.length === 0 && (
					<View style={styles.center}>
						<NoRecordFound />
					</View>
				)}
			</View>
			{isModalVisible && carModalsData?.length > 0 && <SelectModal selectedItem={null} title={`Select ${selectedCarCompany?.name} Modal`} visible={isModalVisible} onClose={onCloseCarModal} setSelectedItem={selectModalAndNavigateToAddVehicle} data={carModalsData} headerChildren={renderHeaderChildren()} />}
		</MainFrame>
	)
}

export default SelectBrand
