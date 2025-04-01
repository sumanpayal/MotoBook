import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomInput from '@src/common/components/Input'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomButton from '@src/common/components/Button'
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { API_RESPONSE } from '@src/common/constants/constants'
import { postMobileLogin } from '@src/network/login'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { useNavigation, useTheme } from '@react-navigation/native'
import { validatePhoneNumber } from '@src/common/utils/inputValidation'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import LottieView from 'lottie-react-native'
import { PhoneGIF } from '@src/assets/lottie'

const Login = () => {
	const dispatch = useDispatch()
	const navigation: any = useNavigation()

	const { colors } = useTheme()

	const [mobileNumber, setMobileNumber] = useState('')

	const onPressSendOTP = () => {
		if (isEmpty(mobileNumber)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter mobile number'
				})
			)
			return
		}
		if (mobileNumber.length < 1) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Phone number must be at least 10 characters'
				})
			)
			return
		}
		if (!validatePhoneNumber(mobileNumber)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter a valid Phone number'
				})
			)
			return
		}
		dispatch(setIsFullScreenLoading(true))
		postLoginAPICall()
	}

	const postLoginAPICall = async () => {
		const params = {
			phoneNumber: mobileNumber
		}
		postMobileLogin({}, params, (res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res?.data) {
				navigation.navigate('VerifyOTP', { phoneNumber: mobileNumber })
			} else {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'error',
						label: res?.error
					})
				)
			}
		})
	}

	return (
		<MainFrame isNotifications={false} isHeader>
			<View style={styles.container}>
				<LottieView source={PhoneGIF} style={{ width: '100%', height: scaleHeightPX(150) }} autoPlay loop />
				<CustomInput labelColor={colors.white} label='Enter Phone Number' onChangeText={setMobileNumber} value={mobileNumber} isLeftChildren keyboardType='phone-pad' maxLength={10} placeholder='Enter Phone Number' />
				<CustomButton customLabelStyles={commonFontStyles.fontBold} onPress={onPressSendOTP} title='Send OTP' />
			</View>
		</MainFrame>
	)
}

export default Login

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: scaleWidthPX(25),
		gap: scaleHeightPX(24),
		marginTop: scaleHeightPX(100)
	}
})
