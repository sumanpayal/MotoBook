import { View, FlatList, Pressable, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { createStyles } from './styles'
import { getMySubscriptionList } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { CarDetailSVG, PlusSVG } from '@src/assets/svg'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { BASE_URL } from '@src/network/apiClient'
import { NoSubscriptionsGIF, NoVehicleGIF } from '@src/assets/lottie'

const MySubscriptions = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const route: any = useRoute()
	const fromCars = route?.params?.fromCars ?? false

	const [allCarsData, setAllCarsData] = useState<any[]>([])

	useFocusEffect(
		useCallback(() => {
			getMyCarsList()
		}, [])
	)

	const getMyCarsList = () => {
		dispatch(setIsFullScreenLoading(true))
		getMySubscriptionList(1, (response: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (response.error) {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'error',
						label: response.error
					})
				)
				setAllCarsData([])
			} else {
				setAllCarsData(response.data)
			}
		})
	}

	const onPressItem = (item: any) => {
		if (fromCars) {
			navigation.navigate('MyCarDetails', { carDetails: item })
		}
		else {
			if (item?.paymentStatus === 'UNPAID') {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'warning',
						label: 'Please complete your payment to continue'
					})
				)
				return
			}
			navigation.navigate('MySubscriptionDetails', { subscriptionDetails: item })
		}
	}

	const renderCarItem = ({ item }: { item: any }) => {
		let image = `${BASE_URL}/${item?.carmodel?.image}`
		console.log({ image });

		return (
			<Pressable style={styles.item} onPress={() => onPressItem(item)}>
				<Image source={{ uri: `${BASE_URL}/${item?.carmodel?.image}` }} style={styles.carImage} />
				<View style={styles.image}>
					<CarDetailSVG />
				</View>
				<View>
					<CustomText style={{ ...commonFontStyles.fontSizeL, color: colors.primary }}>{item?.company?.name}</CustomText>
					<CustomText style={commonFontStyles.fontSizeXL}>{item?.carmodel?.name}</CustomText>
				</View>
			</Pressable>
		)
	}

	const renderAddCarButton = () => {
		return (
			<Pressable style={[styles.carsButton, { bottom: fromCars ? scaleHeightPX(24) : scaleHeightPX(0), }]} onPress={() => navigation.navigate('SelectBrand')}>
				<PlusSVG />
			</Pressable>
		)
	}

	return (
		<MainFrame isHeader isBack={fromCars} isNotifications={false} title={fromCars ? 'My Cars' : 'My Subscriptions'}>
			<View style={styles.main}>
				<FlatList data={allCarsData} renderItem={renderCarItem} keyExtractor={(item: any) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(24) }} />} ListEmptyComponent={() => <NoRecordFound noRecordText={fromCars ? 'No Vehicle added' : 'No Active Subscription'} isLottieImage LottieImage={fromCars ? NoVehicleGIF : NoSubscriptionsGIF} />} contentContainerStyle={allCarsData.length === 0 && styles.center} ListHeaderComponent={() => <View style={{ marginTop: scaleHeightPX(24) }} />} ListFooterComponent={() => <View style={{ marginTop: scaleHeightPX(32) }} />} />
				{renderAddCarButton()}
			</View>
		</MainFrame>
	)
}

export default MySubscriptions
