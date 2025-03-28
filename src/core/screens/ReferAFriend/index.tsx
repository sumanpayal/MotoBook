import { Share, View } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import Clipboard from '@react-native-community/clipboard'
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'
import { Image } from 'react-native'
import { ReferImage } from '@src/assets/image'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomInput from '@src/common/components/Input'
import { CopySVG } from '@src/assets/svg'
import { styles } from './styles'

const ReferAFriend = () => {

	const code = '70Fz3sxY'
	const shareText = `Hey 🚗✨
  I've been using motorWash for super convenient, high-quality car washes right at my doorstep, and I thought you might love it too! No need to wait at a car wash anymore—they come to you and make your car look brand new.
  
  Use my referral link to sign up, and you'll get discount. Refer Code: ${code}
  
  Trust me, it's a game-changer for keeping your car clean without the hassle! 🚙💧

  Here's the link to join: 🚀 https://apps.apple.com/in/app/`

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
		<MainFrame isHeader title='Refer A Friend' isNotifications isBack={false} notificationOnPress={() => { }}>
			<View style={styles.main}>
				<CustomText textType='bold' style={{ ...commonFontStyles.fontSize3XL, textAlign: 'center', marginTop: scaleHeightPX(30) }}>
					{'Share With Friends'}
				</CustomText>
				<CustomText lineHeight style={{ marginTop: scaleHeightPX(16), textAlign: 'center' }}>
					{'Invite Your Friends To Washwoosh And\n Enjoy 10% Off When They Complete Their First\n Purchase. Your Friend Also Gets 10% Off As A\nWelcome Bonus.'}
				</CustomText>
				<View style={{ alignItems: 'center', justifyContent: 'center', marginVertical: scaleHeightPX(44) }}>
					<Image style={{ width: scaleWidthPX(238), height: scaleHeightPX(165) }} source={{ uri: ReferImage }} resizeMode='contain' />
				</View>
				<CustomInput label='Referral Code' onChangeText={() => { }} editable={false} value={code} isRightIcon RightIcon={CopySVG} rightIconOnPress={onPressCopy} />
			</View>
		</MainFrame>
	)
}

export default ReferAFriend
