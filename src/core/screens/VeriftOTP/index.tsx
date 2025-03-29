import { View, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomButton from '@src/common/components/Button'
import { isEmpty } from 'lodash'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { API_RESPONSE } from '@src/common/constants/constants'
import { postMobileLogin, postVerifyOTP } from '@src/network/login'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { VeriftOTPSVG } from '@src/assets/svg'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import CustomOTP from '@src/common/components/OTP'
import { setUserData } from '@src/common/redux/reducers/currentUser'

const TIMER_TIME = 60 // 1 minute

const VerifyOTP = () => {
	const { colors } = useTheme()

	const dispatch = useDispatch()
	const navigation: any = useNavigation()

	const { params }: any = useRoute()
	const mobileNumber = params?.phoneNumber

	const [otp, setOTP] = useState('')

	const [resendAttempts, setResendAttempts] = useState(0)
	const [timer, setTimer] = useState(TIMER_TIME)
	const [isButtonVisible, setIsButtonVisible] = useState(true)

	const maxAttempts = 2 // Maximum number of resend attempts

	const formatTime = (seconds: any) => {
		const minutes = Math.floor(seconds / 60)
		const remainingSeconds = seconds % 60
		return `${minutes.toString().padStart(2, '0')}:${remainingSeconds?.toString().padStart(2, '0')}`
	}

	useEffect(() => {
		let interval: any = null
		if (timer > 0) {
			interval = setInterval(() => {
				setTimer((prev) => prev - 1)
			}, 1000)
		} else {
			clearInterval(interval)
			if (resendAttempts < 2) {
				setIsButtonVisible(true)
			}
		}
		return () => clearInterval(interval)
	}, [timer])

	const onPressResendOTP = () => {
		const params = {
			phoneNumber: mobileNumber
		}
		dispatch(setIsFullScreenLoading(true))
		postMobileLogin({}, params, (res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res?.data) {
				dispatch(
					setAlertData({
						isShown: true,
						type: 'success',
						label: res?.data
					})
				)
				if (resendAttempts < maxAttempts) {
					setResendAttempts((prev) => prev + 1)
					setTimer(TIMER_TIME)
					setIsButtonVisible(false)
				}
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

	const onPressVerifyOTP = () => {
		if (isEmpty(otp)) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter OTP'
				})
			)
			return
		}
		if (otp?.length !== 4) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: 'Please enter valid OTP'
				})
			)
			return
		}
		dispatch(setIsFullScreenLoading(true))
		verifyOTPAPICall()
	}

	const verifyOTPAPICall = () => {
		const params = {
			otp: otp,
			phoneNumber: mobileNumber
		}
		postVerifyOTP({}, params, (res: API_RESPONSE) => {
			dispatch(setIsFullScreenLoading(false))
			if (res?.data) {
				dispatch(setUserData(res?.data?.user))
				navigation.navigate('PostLogin')
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
		<MainFrame isBack isHeader isNotifications={false} backOnPress={() => navigation.goBack()}>
			<View style={styles.container}>
				<VeriftOTPSVG />
				<View style={styles.textView}>
					<CustomText lineHeight textType='semi-bold' style={commonFontStyles.fontSize3XL}>
						{'Verify Code'}
					</CustomText>
					<CustomText lineHeight>{'Enter The Code We Just Sent To Phone No.'}</CustomText>
					<CustomText lineHeight textType='bold' style={{ color: colors.primary }}>
						{mobileNumber}
					</CustomText>
				</View>
				<View style={styles.otpOuterView}>
					<CustomOTP onChange={setOTP} />
					<View style={styles.resendView}>
						<CustomText>{'Didn’t Receive OTP?'}</CustomText>
						<View style={styles.flesRow}>
							{isButtonVisible && (
								<Pressable onPress={onPressResendOTP} disabled={!(isButtonVisible && timer === 0)}>
									<CustomText style={{ color: colors.primary }}>{'Resend OTP  '}</CustomText>
								</Pressable>
							)}
							{timer > 0 && <CustomText>{`in ${formatTime(timer)}`}</CustomText>}
						</View>
					</View>
					<CustomButton onPress={onPressVerifyOTP} title='Vefify' />
				</View>
			</View>
		</MainFrame>
	)
}

export default VerifyOTP

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: scaleWidthPX(18),
		gap: scaleHeightPX(24),
		marginTop: scaleHeightPX(24)
	},
	flesRow: {
		flexDirection: 'row'
	},
	textView: {
		alignItems: 'center',
		justifyContent: 'center',
		gap: scaleHeightPX(2),
		marginVertical: scaleHeightPX(16)
	},
	otpOuterView: {
		flex: 1,
		width: '100%',
		gap: scaleHeightPX(16)
	},
	resendView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		gap: scaleWidthPX(16)
	}
})
