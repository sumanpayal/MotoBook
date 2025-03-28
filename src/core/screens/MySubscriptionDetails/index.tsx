import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { getMySubscriptionDetails } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { createStyles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderNavigation } from '@src/common/components/HeaderNavigation'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { PlanDateSVG, PlanDurationSVG, PlanPriceSVG, PlanStatusSVG, PlanTypeSVG } from '@src/assets/svg'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import moment from 'moment'
import { VehicleAddress, VehicleDetails } from '../MyCarDetails/VedicleDetails'

const MySubscriptionDetails = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const { params }: any = useRoute()

	const subscription_id = params?.subscriptionDetails?._id || 1

	const [subscriptionDetails, setSubscriptionDetails] = useState<any>(null)

	const [planDetails, setPlanDetails] = useState<any[]>([])

	useEffect(() => {
		getMySubscriptionDetailsFromAPI()
	}, [])

	const getMySubscriptionDetailsFromAPI = () => {
		getMySubscriptionDetails(subscription_id, (response: API_RESPONSE) => {
			if (response.error) {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'error',
						label: response.error
					})
				)
			} else {
				setSubscriptionDetails(response.data)
				let interiorCleaningAmount = response?.data?.interiorCleaningAmount ?? 0
				const data = [
					{
						id: 0,
						name: 'Plan Type',
						value: response.data?.plan_detail?.type,
						image: PlanTypeSVG
					},
					{
						id: 1,
						name: 'Duration',
						value: `${response.data?.plan_detail?.duration ?? ''} Month(s)`,
						image: PlanDurationSVG
					},
					{
						id: 2,
						name: 'Status',
						value: response?.data?.requestStatus,
						image: PlanStatusSVG
					},
					{
						id: 3,
						name: 'Renewal Date',
						value: moment.unix(response?.data?.subscriptionExpireAt).format("DD MMMM"),
						image: PlanDateSVG
					},
					{
						id: 4,
						name: 'Amount',
						value: `Rs ${response.data?.plan_detail?.price + interiorCleaningAmount}`,
						image: PlanPriceSVG
					},
				]
				setPlanDetails(data)
			}
		})
	}

	const renderItem = ({ item }: any) => {
		const Icon = item?.image
		return (
			<View style={styles.planDetailsInner}>
				<View style={styles.planLeft}>
					<Icon />
					<CustomText style={commonFontStyles.fontSizeL}>{item?.name}</CustomText>
				</View>
				<View style={styles.planRight}>
					<CustomText style={commonFontStyles.fontSizeL}>{item?.value}</CustomText>
				</View>
			</View>
		)
	}

	return (
		<View style={styles.main}>
			<View style={styles.topView}>
				<SafeAreaView edges={['top']} />
				<HeaderNavigation title='Subscription' backOnPress={() => navigation.goBack()} />
				<View style={styles.topInner}>
					<View style={styles.package}>
						<CustomText textType='bold' style={{ ...commonFontStyles.fontSizeXL, color: colors.backgroundColor }}>
							{subscriptionDetails?.interiorCleaningAmount > 0 ? 'Premium Package' : 'Standard Package'}
						</CustomText>
					</View>
					{VehicleAddress(true, 'Vehicle Number', subscriptionDetails?.carNumber)}
					<View style={styles.vehicleDetails}>
						{VehicleDetails('Vehicle Name', subscriptionDetails?.carmodel?.name)}
						{VehicleDetails('Vehicle Type', subscriptionDetails?.company?.name)}
						{VehicleDetails('Vehicle Color', subscriptionDetails?.color?.name, true, subscriptionDetails?.color?.title)}
					</View>
					{VehicleAddress(true, 'Vehicle Address', subscriptionDetails ? `${subscriptionDetails?.address?.landmark}, ${subscriptionDetails?.address?.state}, ${subscriptionDetails?.address?.city}, ${subscriptionDetails?.address?.country}, ${subscriptionDetails?.address?.postalCode}` : '')}
				</View>
			</View>
			<FlatList data={planDetails} renderItem={renderItem} keyExtractor={(item) => `${item?.id}`} ListFooterComponent={() => <View style={{ marginVertical: scaleHeightPX(24) }} />} ListHeaderComponent={() => <View style={{ marginVertical: scaleHeightPX(12) }} />} ItemSeparatorComponent={() => <View style={{ height: scaleHeightPX(16), }} />} />
			<SafeAreaView edges={['bottom']} />
		</View>
	)
}

export default MySubscriptionDetails
