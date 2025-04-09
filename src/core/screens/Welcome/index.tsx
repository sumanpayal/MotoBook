import { View, Image } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { Welcome1Image, Welcome2Image, Welcome3Image, WelcomeBgImage } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import { useNavigation, useTheme } from '@react-navigation/native'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import CustomButton from '@src/common/components/Button'
import { InAppBrowserType } from '../InAppBrowser'
import { createStyles } from './styles'

const Welcome = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const navigation: any = useNavigation()

	const onPressTermsAndConditions = () => {
		navigation.navigate('InAppBrowser', { type: InAppBrowserType.terms, title: 'Terms and Conditions' })
	}

	const onPressPrivacyPolicy = () => {
		navigation.navigate('InAppBrowser', { type: InAppBrowserType.privacy, title: 'Privacy Policy' })
	}

	const onPressGetStarted = () => {
		navigation.navigate('Login')
	}

	const renderDetails = (image: any, label: string) => {
		return (
			<View style={styles.detailsInner}>
				<Image source={{ uri: image }} style={styles.itemImage} resizeMode={'center'} />
				<CustomText style={styles.itemLabel}>{label}</CustomText>
			</View>
		)
	}

	return (
		<MainFrame isHeader={false}>
			<View style={styles.main}>
				<Image source={{ uri: WelcomeBgImage }} style={styles.imageView} resizeMode='contain' />
				<CustomText lineHeight style={{ ...commonFontStyles.fontSize4XL, textAlign: 'center' }} textType={'bold'}>
					{'Daily Car Cleaning\nat Your Doorstep'}
				</CustomText>
				<View style={styles.detailsOuter}>
					{renderDetails(Welcome1Image, 'No upfront payment required')}
					<View style={styles.seperator} />
					{renderDetails(Welcome2Image, 'Pay conveniently at the end of the every month')}
					<View style={styles.seperator} />
					{renderDetails(Welcome3Image, 'No platform fees, no hidden charges')}
				</View>
				<View style={styles.bottomView}>
					<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Get Started' onPress={onPressGetStarted} />
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

