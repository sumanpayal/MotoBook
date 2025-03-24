import { View, FlatList, Pressable, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useFocusEffect, useNavigation, useRoute, useTheme } from '@react-navigation/native'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { NoRecordFound } from '@src/common/components/NoRecordFound'
import { createStyles } from './styles'
import { getMySubscriptionList } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { useDispatch, useSelector } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { NoSubscriptionImage, NoVehicleImage, SedanImage } from '@src/assets/image'
import { CarDetailSVG, PlusSVG } from '@src/assets/svg'
import { RootState } from '@src/common/redux/store/store'
import { HeaderLeftComponent } from '../Home/components/HeaderLeft'
import commonFontStyles from '@src/common/styles/commonFontStyles'

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
			if (fromCars) {
				navigation.navigate('MyCarDetails', { carDetails: item })
			} else {
				navigation.navigate('MySubscriptionDetails', { subscriptionDetails: item })
			}
		}
	}

	const renderCarItem = ({ item }: { item: any }) => {
		return (
			<Pressable style={styles.item} onPress={() => onPressItem(item)}>
				<Image source={{ uri: item?.carmodel?.image ?? SedanImage }} style={styles.carImage} />
				<View style={styles.image}>
					<CarDetailSVG />
				</View>
				<View>
					<CustomText style={{ ...commonFontStyles.fontSizeL, color: colors.primary }}>{item?.carmodel?.name ?? 'kia'}</CustomText>
					<CustomText style={commonFontStyles.fontSizeXL}>{item?.carNumber ?? 'Sonet HTE (O)'}</CustomText>
				</View>
			</Pressable>
		)
	}

	const renderAddCarButton = () => {
		return (
			<Pressable style={styles.carsButton} onPress={() => navigation.navigate('SelectBrand')}>
				<PlusSVG />
			</Pressable>
		)
	}

	const renderHeader = () => {
		return <HeaderLeftComponent />
	}

	return (
		<MainFrame isCustom={!fromCars} childrenNav={renderHeader()} isHeader isBack={fromCars} isNotifications backOnPress={() => navigation.goBack()} title={fromCars ? 'My Car' : 'My Subscriptions'}>
			<View style={styles.main}>
				<FlatList data={[1, 2, 3]} renderItem={renderCarItem} keyExtractor={(item: any) => item?._id} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(24) }} />} ListEmptyComponent={() => <NoRecordFound noRecordText={fromCars ? 'No Vehicle added' : 'No Active Subscription'} isImage imageSource={fromCars ? NoVehicleImage : NoSubscriptionImage} imageStyle={{ width: fromCars ? scaleWidthPX(194) : scaleWidthPX(113), height: fromCars ? scaleHeightPX(158) : scaleHeightPX(97) }} />} contentContainerStyle={allCarsData.length > 0 && styles.center} ListHeaderComponent={() => <View style={{ marginTop: scaleHeightPX(24) }} />} ListFooterComponent={() => <View style={{ marginTop: scaleHeightPX(32) }} />} />
				{renderAddCarButton()}
			</View>
		</MainFrame>
	)
}

export default MySubscriptions
