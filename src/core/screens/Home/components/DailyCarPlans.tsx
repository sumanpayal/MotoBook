import { useTheme } from '@react-navigation/native'
import { HatchbackImage, SedanImage, SuvImage } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { Image, View } from 'react-native'
import { createStyles } from '../styles'
import React from 'react'

export const DailyCarPlans = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={{ gap: scaleHeightPX(16), marginHorizontal: scaleWidthPX(22) }}>
			{renderTitle('Explore Daily Car Cleaning Plans')}
			<View style={styles.carPlanOuter}>
				{renderCarType('Hatchback', HatchbackImage, '550')}
				{renderCarType('Sedan', SedanImage, '650')}
				{renderCarType('SUV', SuvImage, '750')}
			</View>
		</View>
	)
}

export const renderTitle = (title: string) => {
	return (
		<CustomText textType='bold' style={commonFontStyles.fontSizeXL}>
			{title}
		</CustomText>
	)
}

const renderCarType = (type: string, image: any, price: any) => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.carPlanInner}>
			<Image style={styles.carPlanImage} source={{ uri: image }} resizeMode='center' />
			<View style={styles.carPlanBottom}>
				<CustomText style={commonFontStyles.fontSizeS}>{type}</CustomText>
				<CustomText style={{ color: colors.primary, textAlign: 'center', paddingHorizontal: scaleWidthPX(1) }}>
					{'@ '}
					<CustomText textType='bold' style={{ color: colors.primary }}>
						{`₹${price}`}
					</CustomText>
					<CustomText style={{ color: colors.primary, ...commonFontStyles.fontSizeXS }}>{'/month'}</CustomText>
				</CustomText>
			</View>
		</View>
	)
}
