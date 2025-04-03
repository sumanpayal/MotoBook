import { useTheme } from '@react-navigation/native'
import { PlanImage } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import React from 'react'
import { Image, View } from 'react-native'

interface SubscriptionPlanItemProps {
	item: any;
	isInteriorCleaning: boolean;
	interiorCleaningAmount: number
}

export const SubscriptionPlanItem = (props: SubscriptionPlanItemProps) => {
	const { colors } = useTheme()

	const { item, isInteriorCleaning, interiorCleaningAmount } = props

	return (
		<View style={{ backgroundColor: colors.planBg, paddingVertical: scaleWidthPX(16), borderRadius: 15, height: scaleHeightPX(110), paddingHorizontal: scaleWidthPX(12) }}>
			<View style={{ position: 'absolute', right: scaleWidthPX(8), top: scaleHeightPX(2) }}>
				<Image source={{ uri: PlanImage }} style={{ width: scaleWidthPX(175), height: scaleHeightPX(100) }} resizeMode='contain' />
			</View>
			<CustomText style={{ color: colors.planText, marginTop: scaleHeightPX(8) }}>{getSubscriptionMonthLabel(item?.duration)}</CustomText>
			<CustomText textType='bold' style={{ ...commonFontStyles.fontSizeXL, color: colors.backgroundColor, marginTop: scaleHeightPX(2) }}>
				{subscriptionAmountLabel(item, isInteriorCleaning, interiorCleaningAmount)}
			</CustomText>
		</View>
	)
}

const subscriptionAmountLabel = (item: any, isInteriorCleaning: boolean, interiorCleaningAmount: number) => {
	return isInteriorCleaning ? `@₹${item?.price} + ₹${interiorCleaningAmount} = ₹${item?.price + interiorCleaningAmount}` : `@₹${item?.price}`
}

const getSubscriptionMonthLabel = (month: number) => {
	switch (month) {
		case 1:
			return 'One Month Package'
		case 2:
			return 'Two Months Package'
		case 3:
			return 'Three Months Package'
		case 4:
			return 'Four Months Package'
		case 5:
			return 'Five Months Package'
		case 6:
			return 'Six Months Package'
		case 7:
			return 'Seven Months Package'
		case 8:
			return 'Eight Months Package'
		case 9:
			return 'Nine Months Package'
		case 10:
			return 'Ten Months Package'
		case 11:
			return 'Eleven Months Package'
		case 12:
			return 'Twelve Months Package'
		default:
			return `${month} Months Package`
	}
}
