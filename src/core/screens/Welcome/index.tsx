import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { Welcome1Image, Welcome2Image, Welcome3Image, WelcomeBgImage } from '@src/assets/image'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomText from '@src/common/components/Text'
import { useNavigation, useTheme } from '@react-navigation/native'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import CustomButton from '@src/common/components/Button'

const Welcome = () => {
	const { colors } = useTheme()

	const navigation: any = useNavigation()

	const onPressTermsAndConditions = () => { }

	const onPressPrivacyPolicy = () => { }

	const onPressGetStarted = () => {
		navigation.navigate('Login')
	}

	const renderDetails = (image: any, label: string) => {
		return (
			<View style={styles.detailsInner}>
				<Image source={{ uri: image }} style={{ width: scaleWidthPX(50), height: scaleWidthPX(50) }} resizeMode={'center'} />
				<CustomText style={{ ...commonFontStyles.fontSizeXS, textAlign: 'center' }}>{label}</CustomText>
			</View>
		)
	}

	return (
		<MainFrame isHeader={false}>
			<View style={styles.main}>
				<Image source={{ uri: WelcomeBgImage }} style={styles.imageView} resizeMode='contain' />
				<CustomText lineHeight style={{ ...commonFontStyles.fontSize4XL, color: colors.white, textAlign: 'center' }} textType={'semi-bold'}>
					{'Daily Car Cleaning\nat Your Doorstep'}
				</CustomText>
				<View style={styles.detailsOuter}>
					{renderDetails(Welcome1Image, 'No upfront payment required')}
					<View style={{ width: 0.5, height: scaleHeightPX(90), backgroundColor: colors.white + '80' }} />
					{renderDetails(Welcome2Image, 'Pay conveniently at the end of the every month')}
					<View style={{ width: 0.5, height: scaleHeightPX(90), backgroundColor: colors.white + '80' }} />
					{renderDetails(Welcome3Image, 'No platform fees, no hidden charges')}
				</View>
				<View style={styles.bottomView}>
					<CustomButton title='Get Started' onPress={onPressGetStarted} />
					<CustomText lineHeight style={{ textAlign: 'center', ...commonFontStyles.fontSizeS }}>
						{`Clicking "`}
						<CustomText lineHeight textType='bold'>
							{`Get Started`}
						</CustomText>
						<CustomText lineHeight>{`" confirms, you agree to our\n`}</CustomText>
						<CustomText onPress={onPressTermsAndConditions} lineHeight style={{ color: colors.primary, textDecorationLine: 'underline' }}>{`Terms and Conditions`}</CustomText>
						<CustomText lineHeight>{` and `}</CustomText>
						<CustomText onPress={onPressPrivacyPolicy} lineHeight style={{ color: colors.primary, textDecorationLine: 'underline' }}>{`Privacy Policy`}</CustomText>
					</CustomText>
				</View>
			</View>
		</MainFrame>
	)
}

export default Welcome

const styles = StyleSheet.create({
	main: {
		flex: 1,
		alignItems: 'center',
		marginHorizontal: scaleWidthPX(16)
	},
	imageView: {
		width: scaleWidthPX(388),
		height: scaleHeightPX(221),
		marginTop: scaleHeightPX(110),
		marginBottom: scaleHeightPX(50)
	},
	detailsOuter: {
		marginTop: scaleHeightPX(40),
		flexDirection: 'row',
		height: scaleHeightPX(115),
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%'
	},
	detailsInner: {
		width: '30%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		gap: scaleHeightPX(8)
	},
	bottomView: {
		width: '100%',
		position: 'absolute',
		bottom: scaleHeightPX(24),
		gap: scaleHeightPX(8)
	}
})
