import { Linking, ScrollView, View } from 'react-native'
import React, { useCallback } from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomInput from '@src/common/components/Input'
import { CopySVG, Refer1SVG, Refer2SVG, Refer3SVG, Refer4SVG, WhatsappSVG } from '@src/assets/svg'
import { styles } from './styles'
import CustomButton from '@src/common/components/Button'
import { ReferFriendGIF } from '@src/assets/lottie'
import LottieView from 'lottie-react-native'
import { useFocusEffect, useTheme } from '@react-navigation/native'
import { setIsFullScreenLoading } from '@src/common/redux/reducers/loader'

const ReferAFriend = () => {

	const { colors } = useTheme()

	const code = '70Fz3sxY'
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
				type: 'warning',
				label: 'copied to clipboard'
			})
		)
	}

	const referToFreiendOnPress = async () => {
		let url = `whatsapp://send&text=${shareText}`
		Linking.canOpenURL(url).then((supported: boolean) => {
			if (supported) {
				Linking.openURL(url)
			}
		})
	}

	const renderStep = (isIocn: boolean, Icon: any, label: string, step: string = '') => {
		return (
			<View style={{ gap: scaleWidthPX(12), alignItems: 'center', flexDirection: 'row', flex: 1 }}>
				{isIocn ? <Icon width={scaleWidthPX(30)} height={scaleWidthPX(30)} /> : <View style={{ width: scaleWidthPX(30), height: scaleWidthPX(30), backgroundColor: colors.primary, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}><CustomText textType='bold'>{step}</CustomText></View>}
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
				{renderStep(false, Refer1SVG, `Share the MotorWash app with your friends, family, or neighbors.`, '1')}
				{renderStep(false, Refer2SVG, `Your friends download the MotorWash app`, '2')}
				{renderStep(false, Refer3SVG, `While submitting their vehicle form, they must enter your referral code`, '3')}
				{renderStep(true, Refer4SVG, `Once your friend completes 1 month of service, you get 50% OFF on your next billing cycle. No limits—refer more, save more!`, '')}
			</View>
		)
	}

	return (
		<MainFrame isHeader={false}>
			<ScrollView style={styles.main}>
				<CustomText textType='bold' style={{ ...commonFontStyles.fontSize3XL, textAlign: 'center', marginTop: scaleHeightPX(30), marginBottom: scaleHeightPX(24) }}>
					{'Refer A Friend'}
				</CustomText>
				{renderSteps()}
				<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: scaleHeightPX(20) }}>
					<LottieView source={ReferFriendGIF} style={{ width: scaleWidthPX(300), height: scaleHeightPX(175) }} autoPlay loop />
				</View>
				<CustomInput label='Referral Code' onChangeText={() => { }} editable={false} value={code} isRightIcon RightIcon={CopySVG} rightIconOnPress={onPressCopy} />
				<View style={{ marginTop: scaleHeightPX(24) }} />
				<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Refer Now' onPress={referToFreiendOnPress} showIcon SVGIcon={() => <WhatsappSVG width={scaleWidthPX(30)} height={scaleWidthPX(30)} />} />
			</ScrollView>
		</MainFrame>
	)
}

export default ReferAFriend
