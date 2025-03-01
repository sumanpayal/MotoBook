import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { getMySubscriptionDetails } from '@src/network/car'
import { API_RESPONSE } from '@src/common/constants/constants'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { styles } from './styles'

const MySubscriptionDetails = () => {
	const navigation: any = useNavigation()
	const dispatch = useDispatch()

	const { colors } = useTheme()

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

	return (
		<MainFrame isHeader backOnPress={() => navigation.goBack()} title='Subscription Details'>
			<View style={styles.main}></View>
		</MainFrame>
	)
}

export default MySubscriptionDetails
