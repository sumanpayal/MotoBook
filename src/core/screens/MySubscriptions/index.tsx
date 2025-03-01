import { View, FlatList, Pressable, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { createStyles } from './styles'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { getMySubscriptionList } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'

const MySubscriptions = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const [allCarsData, setAllCarsData] = useState<any[]>([])

	useFocusEffect(
		useCallback(() => {
			getMyCarsList()
		}, [])
	)

	const getMyCarsList = () => {
		getMySubscriptionList(1, (response: API_RESPONSE) => {
			if (response.error) {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'error',
						label: response.error
					})
				)
			} else {
				setAllCarsData(response.data)
			}
		})
	}

	const onPressItem = (item: any) => {
		if (item?.paymentStatus === 'UNPAID') {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'warning',
					label: 'Please complete your payment to continue'
				})
			)
		} else {
			navigation.navigate('MySubscriptionDetails', { subscriptionDetails: item })
		}
	}

	const renderCarItem = ({ item }: { item: any }) => {
		return (
			<Pressable style={styles.item} onPress={() => onPressItem(item)}>
				<Image source={{ uri: item?.carmodel?.image }} style={styles.carImage} />
				<View style={styles.itemInner}>
					<CustomText textType='bold' lineHeight>
						{item?.carmodel?.name}
					</CustomText>
					<CustomText textType='medium' lineHeight>
						{item?.carNumber}
					</CustomText>
				</View>
			</Pressable>
		)
	}

	const renderAddCarButton = () => {
		return (
			<Pressable style={styles.carsButton} onPress={() => navigation.navigate('SelectBrand')}>
				<CustomText style={commonFontStyles.fontSize4XL} textType='bold'>
					{'+'}
				</CustomText>
			</Pressable>
		)
	}

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='My Subscriptions'>
			<View style={styles.main}>
				<FlatList data={allCarsData} renderItem={renderCarItem} keyExtractor={(item: any) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16) }} />} ListEmptyComponent={() => <NoRecordFound noRecordText='No subscriptions added yet' />} contentContainerStyle={allCarsData.length === 0 && styles.center} ListHeaderComponent={() => <View style={{ marginTop: scaleHeightPX(24) }} />} ListFooterComponent={() => <View style={{ marginTop: scaleHeightPX(32) }} />} />
				{renderAddCarButton()}
			</View>
		</MainFrame>
	)
}

export default MySubscriptions
