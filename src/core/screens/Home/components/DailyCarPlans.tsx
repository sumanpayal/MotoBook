import { useTheme } from '@react-navigation/native'
import { HatchbackImage, SedanImage, SuvImage } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX } from '@src/common/utils/responsiveStyle'
import { Image, View } from 'react-native'
import { createStyles } from '../styles'

export const DailyCarPlans = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={{ gap: scaleHeightPX(16) }}>
			<CustomText textType='semi-bold' style={commonFontStyles.fontSizeXL}>
				{'Explore Daily Car Cleaning Plans'}
			</CustomText>
			<View style={styles.carPlanOuter}>
				{renderCarType('Hatchback', HatchbackImage, '550')}
				{renderCarType('Sedan', SedanImage, '650')}
				{renderCarType('Suv', SuvImage, '750')}
			</View>
		</View>
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
				<CustomText style={{ color: colors.primary }}>
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
