import CustomButton from '@src/common/components/Button'
import MainFrame from '@src/common/components/Mainframe'
import { API_RESPONSE } from '@src/common/constants/constants'
import { setUserData } from '@src/common/redux/reducers/currentUser'
import { postMobileLogin, postVerifyOTP } from '@src/network/login'
import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'

const Demo = () => {
	const dispatch = useDispatch()

	const postLoginAPICall = async () => {
		const params = {
			"phoneNumber": "1234567891"
		}
		postMobileLogin({}, params, (res: API_RESPONSE) => {
			if (res?.data) {
				verifyOTPAPICall()
			}
		})
	}

	const verifyOTPAPICall = () => {
		const params = {
			"otp": "1234",
			"phoneNumber": "1234567891"
		}
		postVerifyOTP({}, params, (res: API_RESPONSE) => {
			if (res?.data) {
				dispatch(setUserData(res?.data?.user))
			}
		})
	}

	return (
		<MainFrame>
			<View style={{ gap: 16, flex: 1, alignItems: 'center', justifyContent: 'center', margin: 16 }}>
				<CustomButton title='Login' onPress={postLoginAPICall} />
			</View>
		</MainFrame>
	)
}

export default Demo
