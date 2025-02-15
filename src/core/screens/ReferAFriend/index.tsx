import { Pressable, Share, View } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import CustomText from '@src/common/components/Text'
import CustomButton from '@src/common/components/Button'
import { useTheme } from '@react-navigation/native'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { createStyles } from './styles'
import Clipboard from "@react-native-community/clipboard";
import { useDispatch } from 'react-redux'
import { setAlertData } from '@src/common/redux/reducers/alert'

const ReferAFriend = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const code = '70Fz3sxY'
	const shareText = `Hey 🚗✨
  I've been using motorWash for super convenient, high-quality car washes right at my doorstep, and I thought you might love it too! No need to wait at a car wash anymore—they come to you and make your car look brand new.
  
  Use my referral link to sign up, and you'll get discount. Refer Code: ${code}
  
  Trust me, it's a game-changer for keeping your car clean without the hassle! 🚙💧

  Here's the link to join: 🚀 https://apps.apple.com/in/app/`

	const dispatch = useDispatch()

	const RenderCountView = ({ label, value }: { label: string; value: any }) => {
		return (
			<View style={styles.subContainer}>
				<CustomText style={{ ...commonFontStyles.fontSizeS }}>{label}</CustomText>
				<View style={styles.subView}>
					<CustomText textType='medium' style={{ color: colors.backgroundColor }}>
						{value}
					</CustomText>
				</View>
			</View>
		)
	}

	const onPressCopy = async () => {
		await Clipboard.setString(shareText)
		dispatch(setAlertData({
			isShown: true,
			type: 'warning',
			label: 'copied to clipboard'
		}))
	}

	const referToFreiendOnPress = async () => {
		try {
			await Share.share({
				message: shareText,
			});
		} catch (error: any) {
			dispatch(setAlertData({
				isShown: true,
				type: 'error',
				label: error.message
			}))
		}
	};

	return (
		<MainFrame>
			<View style={styles.main}>
				<View style={styles.imageOuterView} />
				<View style={styles.topView}>
					<CustomText>{'Refer A Friend'}</CustomText>
					<View style={styles.codeView}>
						<CustomText textType='bold' style={{ ...commonFontStyles.fontSizeL }}>
							{code}
						</CustomText>
						<Pressable onPress={onPressCopy}>
							<CustomText textType='bold' style={{ color: colors.primary }}>
								{'copy'}
							</CustomText>
						</Pressable>
					</View>
				</View>
				<CustomButton title='Refer friends now' onPress={referToFreiendOnPress} isCircleRadius={false} showIcon SVGIcon={'share-outline'} />
				<View style={styles.bottomView}>
					<View style={styles.container}>
						<RenderCountView label='Refer code' value={'0'} />
						<RenderCountView label='Subscription' value={'0'} />
						<RenderCountView label='Coupon claim' value={'0'} />
					</View>
				</View>
			</View>
		</MainFrame>
	)
}

export default ReferAFriend
