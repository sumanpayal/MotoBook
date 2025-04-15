import { ScrollView, Share, View } from 'react-native'
import React, { useCallback } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch, useSelector } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomInput from '@src/common/components/Input'
import { CopySVG, Refer1SVG, Refer2SVG, Refer3SVG, Refer4SVG, WhatsappSVG } from '@src/assets/svg'
import { styles } from './styles'
import CustomButton from '@src/common/components/Button'
import { ReferFriendGIF } from '@src/assets/lottie'
import LottieView from 'lottie-react-native'
import { useFocusEffect } from '@react-navigation/native'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'
import { RootState } from '@src/common/redux/store/store'

const ReferAFriend = () => {
	const profileData: any = useSelector((state: RootState) => state.root.currentUser.profileData)

	const code = profileData?.referralCode ?? '70Fz3sxY'
	const shareText = `Hey! I’ve been using MotorWash for daily car cleaning, and it’s awesome! Just use my referral code ${code} while submitting your vehicle form. Sign up here: https://apps.apple.com/in/app/`

	const dispatch = useDispatch()

	useFocusEffect(useCallback(() => {
		dispatch(setIsFullScreenLoading(false))
	}, []))

	const onPressCopy = async () => {
		await Clipboard.setString(shareText)
		dispatch(
			setAlertData({
				isShown: true,
				type: 'success',
				label: 'copied to clipboard'
			})
		)
	}

	const referToFreiendOnPress = async () => {
		try {
			await Share.share({
				message: shareText
			})
		} catch (error: any) {
			dispatch(
				setAlertData({
					isShown: true,
					type: 'error',
					label: error.message
				})
			)
		}
	}

	const renderStep = (Icon: any, label: string) => {
		return (
			<View style={{ gap: scaleWidthPX(12), alignItems: 'center', flexDirection: 'row', flex: 1 }}>
				<Icon width={scaleWidthPX(30)} height={scaleWidthPX(30)} />
				<CustomText style={{ flex: 1 }} lineHeight>
					{label}
				</CustomText>
			</View>
		)
	}

	const renderSteps = () => {
		return (
			<View style={{ flex: 1, gap: scaleHeightPX(8), alignItems: 'flex-start' }}>
				<CustomText textType='bold' style={commonFontStyles.fontSizeXL}>{'How It Works?'}</CustomText>
				{renderStep(Refer1SVG, `Share the MotorWash app with your friends, family, or neighbors.`)}
				{renderStep(Refer2SVG, `Your friends download the MotorWash app`)}
				{renderStep(Refer3SVG, `While submitting their vehicle form, they must enter your referral code`)}
				{renderStep(Refer4SVG, `Once your friend completes 1 month of service, you get 50% OFF on your next billing cycle. No limits—refer more, save more!`)}
			</View>
		)
	}

	return (
		<MainFrame isHeader={false}>
			<ScrollView style={styles.main}>
				<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: scaleHeightPX(24) }}>
					<LottieView source={ReferFriendGIF} style={{ width: scaleWidthPX(300), height: scaleHeightPX(175) }} autoPlay loop />
				</View>
				{renderSteps()}
				<View style={{ marginTop: scaleHeightPX(36) }} />
				<CustomInput label='Referral Code' onChangeText={() => { }} editable={false} value={code} isRightIcon RightIcon={CopySVG} rightIconOnPress={onPressCopy} />
				<View style={{ marginTop: scaleHeightPX(24) }} />
				<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Refer Now' onPress={referToFreiendOnPress} showIcon SVGIcon={() => <WhatsappSVG width={scaleWidthPX(30)} height={scaleWidthPX(30)} />} />
			</ScrollView>
		</MainFrame>
	)
}

export default ReferAFriend
