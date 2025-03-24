import { ScrollView, View } from 'react-native'
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

const MySubscriptionDetails = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const { params }: any = useRoute()

	const subscription_id = params?.subscriptionDetails?._id || 1

	const [subscriptionDetails, setSubscriptionDetails] = useState<any[]>([])

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
			}
		})
	}

	const renderPlanDetails = (label: any, Icon: any, value: any) => {
		return (
			<View style={styles.planDetailsInner}>
				<View style={styles.planLeft}>
					<Icon />
					<CustomText style={commonFontStyles.fontSizeL}>{label}</CustomText>
				</View>
				<View style={styles.planRight}>
					<CustomText style={commonFontStyles.fontSizeL}>{value}</CustomText>
				</View>
			</View>
		)
	}

	const renderVehicleDetails = (label: any, value: any, isColor: boolean = false) => {
		return (
			<View style={styles.vehicleInner}>
				<CustomText style={{ color: colors.labelColor }}>{label}</CustomText>
				<View style={{ ...styles.vehicleImage, backgroundColor: isColor ? 'transparent' : colors.labelColor }}>{isColor && <View style={{ ...styles.vehicleColor, backgroundColor: 'red' }} />}</View>
				<CustomText textType='bold'>{value}</CustomText>
			</View>
		)
	}

	const renderVehicleAddress = (label: any, value: any) => {
		return (
			<View style={styles.vehicle}>
				<CustomText lineHeight style={{ color: colors.labelColor }}>
					{label}
				</CustomText>
				<CustomText lineHeight textType='bold' style={commonFontStyles.fontSizeXL}>
					{value}
				</CustomText>
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
							{'Standard Package'}
						</CustomText>
					</View>
					{renderVehicleAddress('Vehicle Number', 'RJ14-GJ3400')}
					<View style={styles.vehicleDetails}>
						{renderVehicleDetails('Vehicle Name', 'Sedan')}
						{renderVehicleDetails('Vehicle Type', 'Sedan')}
						{renderVehicleDetails('Vehicle Color', 'Red', true)}
					</View>
					{renderVehicleAddress('Vehicle Address', 'RJ14-GJ3400')}
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.planDetailsOuter}>
					{renderPlanDetails('Plan Type', PlanTypeSVG, 'Basi Plan')}
					{renderPlanDetails('Duration', PlanDurationSVG, 'Monthly')}
					{renderPlanDetails('Status', PlanStatusSVG, 'Active')}
					{renderPlanDetails('Renewal Date', PlanDateSVG, '20th January')}
					{renderPlanDetails('Amount', PlanPriceSVG, 'Rs 799')}
				</View>
			</ScrollView>
		</View>
	)
}

export default MySubscriptionDetails
