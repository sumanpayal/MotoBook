import { ScrollView, Share, View } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import Clipboard from '@react-native-clipboard/clipboard';
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { Image } from 'react-native'
import { ReferImage } from '@src/assets/image'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomInput from '@src/common/components/Input'
import { CopySVG } from '@src/assets/svg'
import { styles } from './styles'
import CustomButton from '@src/common/components/Button'

const ReferAFriend = () => {

	const code = '70Fz3sxY'
	const shareText = `Hey! I’ve been using MotorWash for daily car cleaning, and it’s awesome! Use my referral link and get 50% OFF on your first month. Plus, I get 50% off too! Win-win! 🎉 Sign up now: https://apps.apple.com/in/app/`

	const dispatch = useDispatch()

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

	return (
		<MainFrame isHeader={false}>
			<ScrollView style={styles.main}>
				<CustomText textType='bold' style={{ ...commonFontStyles.fontSize3XL, textAlign: 'center', marginTop: scaleHeightPX(30) }}>
					{'Refer & Save – 50% OFF on MotorWash! '}
				</CustomText>
				<CustomText lineHeight style={{ marginTop: scaleHeightPX(16), textAlign: 'center' }}>
					{'Invite your friends to MotorWash and both of you get 50% OFF on your next billing cycle! Your friend must complete 1 month of service for the discount to apply. No limits—refer more, save more!'}
				</CustomText>
				<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: scaleHeightPX(44) }}>
					<Image style={{ width: scaleWidthPX(238), height: scaleHeightPX(165) }} source={{ uri: ReferImage }} resizeMode='contain' />
				</View>
				<CustomInput label='Referral Code' onChangeText={() => { }} editable={false} value={code} isRightIcon RightIcon={CopySVG} rightIconOnPress={onPressCopy} />
				<View style={{ marginTop: scaleHeightPX(24) }} />
				<CustomButton title='Share code with friends' onPress={referToFreiendOnPress} />
			</ScrollView>
		</MainFrame>
	)
}

export default ReferAFriend
