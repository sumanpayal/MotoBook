import { Image, ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { getMySubscriptionDetails } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderNavigation } from '@src/common/components/HeaderNavigation'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { CarDetailBgSVG } from '@src/assets/svg'
import { createStyles } from './styles'
import { VehicleAddress, VehicleDetails } from './VedicleDetails'
import { BASE_URL } from '@src/network/apiClient'

const MyCarDetails = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()
	const styles = createStyles(colors)

	const { params }: any = useRoute()

	const subscription_id = params?.carDetails?._id || 1

	const [carDetails, setCarDetails] = useState<any>(null)

	useEffect(() => {
		getMyCardDetailsFromAPI()
	}, [])

	const getMyCardDetailsFromAPI = () => {
		getMySubscriptionDetails(subscription_id, (response: API_RESPONSE) => {
			setCarDetails([])
			if (response.error) {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'error',
						label: response.error
					})
				)
			} else {
				setCarDetails(response.data)
			}
		})
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.main}>
				<View style={styles.topView}>
					<SafeAreaView edges={['top']} />
					<HeaderNavigation title='Car Details' backOnPress={() => navigation.goBack()} />
					<View style={styles.topInner}>
						<CarDetailBgSVG />
						<Image source={{ uri: `${BASE_URL}/${carDetails?.carmodel?.image}` }} style={{ width: '100%', height: '100%', position: 'absolute', resizeMode: 'contain' }} />
					</View>
				</View>
				<View style={styles.topBottom}>
					<View style={styles.package}>
						<CustomText textType='bold' style={{ ...commonFontStyles.fontSizeXL, color: colors.backgroundColor, }}>
							{carDetails?.interiorCleaningAmount > 0 ? 'Premium Package' : 'Standard Package'}
						</CustomText>
					</View>
					{VehicleAddress(false, 'Vehicle Number', carDetails?.carNumber)}
					<View style={styles.vehicleDetails}>
						<VehicleDetails label={'Vehicle Name'} value={carDetails?.carmodel?.name} image={carDetails?.carmodel?.image} />
						<VehicleDetails label={'Vehicle Type'} value={carDetails?.company?.name} image={carDetails?.company?.image} />
						<VehicleDetails label={'Vehicle Color'} value={carDetails?.color?.name} isColor color={carDetails?.color?.title} />
					</View>
					{VehicleAddress(false, 'Vehicle Address', carDetails ? `${carDetails?.address?.landmark}, ${carDetails?.address?.state}, ${carDetails?.address?.city}, ${carDetails?.address?.country}, ${carDetails?.address?.postalCode}` : '')}
				</View>
			</View>
		</ScrollView>
	)
}

export default MyCarDetails
