import { View, StyleSheet, BackHandler } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomText from '@src/common/components/Text'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import CustomButton from '@src/common/components/Button'
import LottieView from 'lottie-react-native'
import { Success } from '@src/assets/lottie'

const RequestSubmitted = () => {
	const navigation: any = useNavigation()

	useFocusEffect(
		React.useCallback(() => {
			const onBackPress = () => {
				onPressGotIt()
				return true
			}
			BackHandler.addEventListener('hardwareBackPress', onBackPress)
		}, [])
	)

	const onPressGotIt = () => {
		navigation.popToTop()
	}

	return (
		<MainFrame isHeader={false}>
			<View style={styles.main}>
				<LottieView source={Success} style={styles.imageView} autoPlay loop />
				<View style={{ width: '92%', gap: scaleHeightPX(28) }}>
					<CustomText style={{ ...commonFontStyles.fontSize3XL, textAlign: 'center' }} textType={'bold'}>
						{'Request Submitted'}
					</CustomText>
					<CustomText style={{ textAlign: 'center', ...commonFontStyles.fontSizeL }}>{`Your request has been submitted.\nour team will be in touch shortly`}</CustomText>
					<CustomButton customLabelStyles={commonFontStyles.fontBold} title='Got It' onPress={onPressGotIt} />
				</View>
			</View>
		</MainFrame>
	)
}

export default RequestSubmitted

const styles = StyleSheet.create({
	main: {
		flex: 1,
		alignItems: 'center'
	},
	imageView: {
		width: scaleWidthPX(300),
		height: scaleWidthPX(300)
	}
})
