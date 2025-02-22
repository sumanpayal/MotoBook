import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAddressListAPI } from '@src/network/address'
import { API_RESPONSE } from '@src/common/constants/constants'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation, useTheme } from '@react-navigation/native'
import { createStyles } from './styles'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'

const AddressList = () => {
	const navigation = useNavigation()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const [allAddressData, setAllAddressData] = useState<any[]>([])

	useEffect(() => {
		getAddressList()
	}, [])

	const getAddressList = () => {
		getAddressListAPI((res: API_RESPONSE) => {
			if (res.data) {
				setAllAddressData(res.data)
			}
		})
	}

	const renderAddressItem = ({item}: {item: any}) => {
		return (
			<View>
				<CustomText>{"Landmark: "}{item?.landmark}</CustomText>
				<CustomText>{"City: "}{item?.city}</CustomText>
				<CustomText>{"State: "}{item?.state}</CustomText>
				<CustomText>{"Country: "}{item?.country}</CustomText>
				<CustomText>{"Postal Code: "}{item?.postalCode}</CustomText>
				<CustomText>{"Address Type: "}{item?.addressType}</CustomText>
			</View>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Address List'>
			<View style={styles.main}>
				<FlatList data={allAddressData} renderItem={renderAddressItem} keyExtractor={(item) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} />
			</View>
		</MainFrame>
	)
}

export default AddressList
