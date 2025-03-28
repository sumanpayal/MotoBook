import { View, Image, StyleSheet, BackHandler } from 'react-native'
import React from 'react'
import MainFrame from '@src/common/components/Mainframe'
import { RequestSubmittedImage } from '@src/assets/image'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import CustomText from '@src/common/components/Text'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import CustomButton from '@src/common/components/Button'

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
				<Image source={{ uri: RequestSubmittedImage }} style={styles.imageView} resizeMode={'contain'} />
				<View style={{ width: '92%', gap: scaleHeightPX(28) }}>
					<CustomText style={{ ...commonFontStyles.fontSize3XL, textAlign: 'center' }} textType={'semi-bold'}>
						{'Request Submitted'}
					</CustomText>
					<CustomText style={{ textAlign: 'center', ...commonFontStyles.fontSizeL }}>{`Your request has been submitted.\nour team will be in touch shortly`}</CustomText>
					<CustomButton title='Got It' onPress={onPressGotIt} />
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
		marginTop: scaleHeightPX(150),
		width: scaleWidthPX(287),
		height: scaleWidthPX(287)
	}
})
