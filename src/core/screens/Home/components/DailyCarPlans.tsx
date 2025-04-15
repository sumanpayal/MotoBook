import { useNavigation, useTheme } from '@react-navigation/native'
import { HatchbackImage, SedanImage, SuvImage } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { Image, Pressable, View } from 'react-native'
import { createStyles } from '../styles'
import React from 'react'

const HATCHBACK_DETAILS = {
	name: 'Hatchback',
	price: '549',
	smallImage: HatchbackImage,
	largeImage: 'https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Altroz/10707/1738305103049/front-left-side-47.jpg'
}

const SEDAN_DETAILS = {
	name: 'Sedan',
	price: '649',
	smallImage: SedanImage,
	largeImage: 'https://media.zigcdn.com/media/model/2023/Mar/hyundai-verna-3_360x240.jpg'
}

const SUV_DETAILS = {
	name: 'SUV',
	price: '749',
	smallImage: SuvImage,
	largeImage: 'https://spn-sta.spinny.com/blog/20220825223325/Luxury-SUVs.jpg'
}

export const DailyCarPlans = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={{ gap: scaleHeightPX(16), marginHorizontal: scaleWidthPX(22) }}>
			{renderTitle('Explore Daily Car Cleaning Plans')}
			<View style={styles.carPlanOuter}>
				{renderCarType(HATCHBACK_DETAILS)}
				{renderCarType(SEDAN_DETAILS)}
				{renderCarType(SUV_DETAILS)}
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

const renderCarType = (carDetails: any) => {
	const { colors } = useTheme()
	const styles = createStyles(colors)

	const navigation: any = useNavigation()

	return (
		<Pressable style={styles.carPlanInner} onPress={() => navigation.navigate('CarDetails', { carDetails: carDetails })}>
			<Image style={styles.carPlanImage} source={{ uri: carDetails?.smallImage }} resizeMode='cover' />
			<View style={styles.carPlanBottom}>
				<CustomText style={commonFontStyles.fontSizeS}>{carDetails?.name}</CustomText>
				<CustomText style={{ color: colors.primary, textAlign: 'center', paddingHorizontal: scaleWidthPX(1) }}>
					{'@ '}
					<CustomText textType='bold' style={{ color: colors.primary }}>
						{`₹${carDetails?.price}`}
					</CustomText>
					<CustomText style={{ color: colors.primary, ...commonFontStyles.fontSizeXS }}>{'/month'}</CustomText>
				</CustomText>
			</View>
		</Pressable>
	)
}
