import { View, FlatList, Pressable } from 'react-native'
import React, { useCallback, useState } from 'react'
import { getAddressListAPI } from '@src/network/address'
import { API_RESPONSE } from '@src/common/constants/constants'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { useDispatch } from 'react-redux'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { CarDetailSVG, PlusSVG } from '@src/assets/svg'

const AddressList = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const [allAddressData, setAllAddressData] = useState<any[]>([])

	useFocusEffect(
		useCallback(() => {
			dispatch(setIsFullScreenLoading(true))
			getAddressList()
		}, [])
	)

	const getAddressList = () => {
		getAddressListAPI((res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res.data) {
				setAllAddressData(res.data)
			}
			else {
				setAllAddressData([])
			}
		})
	}

	const onPressItem = (item: any) => {
		navigation.navigate('AddAddress', { isEdit: true, addressDetails: item })
	}

	const renderAddressItem = ({ item }: { item: any }) => {
		return (
			<Pressable style={styles.item} onPress={() => onPressItem(item)}>
				<View style={styles.image}>
					<CarDetailSVG />
				</View>
				<View style={{ gap: scaleHeightPX(3) }}>
					{renderSingleItem('Landmark', item?.landmark)}
					{renderSingleItem('City', item?.city)}
					{renderSingleItem('State', item?.state)}
					{renderSingleItem('Country', item?.country)}
					{renderSingleItem('Postal Code', item?.postalCode)}
					{renderSingleItem('Address Type', item?.addressType)}
				</View>
			</Pressable>
		)
	}

	const renderSingleItem = (label: string, value: any) => {
		return (
			<View style={{ flexDirection: 'row', gap: scaleWidthPX(1), alignItems: 'center' }}>
				<CustomText style={{ ...commonFontStyles.fontSizeL, color: colors.primary }}>{`${label}: `}</CustomText>
				<CustomText style={commonFontStyles.fontSizeXL}>{value}</CustomText>
			</View>
		)
	}

	const renderAddButton = () => {
		return (
			<Pressable style={styles.add} onPress={() => navigation.navigate('AddAddress')}>
				<PlusSVG />
			</Pressable>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Service Address' isNotifications={false}>
			<View style={styles.main}>
				<FlatList contentContainerStyle={allAddressData.length === 0 && { flex: 1, justifyContent: 'center', alignItems: 'center' }} data={allAddressData} renderItem={renderAddressItem} keyExtractor={(item) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListEmptyComponent={NoRecordFound} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} showsVerticalScrollIndicator={false} />
			</View>
			{renderAddButton()}
		</MainFrame>
	)
}

export default AddressList
