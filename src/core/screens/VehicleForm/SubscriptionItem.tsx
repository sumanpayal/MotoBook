import { useTheme } from '@react-navigation/native'
import { PlanIconImage, PlanImage } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import commonFontStyles from '@src/common/styles/commonFontStyles'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { Image, Pressable, View } from 'react-native'
import { interiorCleaningAmount } from '.'

export const SubscriptionPlanItem = (props: { selectedSubscriptionPlan: any; item: any; setSelectedSubscriptionPlan: (item: any) => void; isInteriorCleaning: boolean }) => {
	const { colors } = useTheme()

	const { selectedSubscriptionPlan, item, setSelectedSubscriptionPlan, isInteriorCleaning } = props

	return (
		<Pressable style={{ backgroundColor: selectedSubscriptionPlan?._id === item?._id ? colors.primary : colors.planBg, padding: scaleWidthPX(16), borderRadius: 15, height: scaleHeightPX(110), justifyContent: 'center' }} onPress={() => setSelectedSubscriptionPlan(item)}>
			<Image source={{ uri: PlanIconImage }} style={{ width: scaleWidthPX(64), height: scaleHeightPX(25) }} />
			<CustomText style={{ color: colors.planText, marginTop: scaleHeightPX(8) }}>{`${item?.duration} Month(s) Package`}</CustomText>
			<CustomText textType='bold' style={{ ...commonFontStyles.fontSizeXL, color: colors.backgroundColor, marginTop: scaleHeightPX(2) }}>
				{subscriptionAmountLabel(item, isInteriorCleaning)}
			</CustomText>
			<View style={{ position: 'absolute', right: scaleWidthPX(8) }}>
				<Image source={{ uri: PlanImage }} style={{ width: scaleWidthPX(140), height: scaleHeightPX(90) }} resizeMode='contain' />
			</View>
		</Pressable>
	)
}

const subscriptionAmountLabel = (item: any, isInteriorCleaning: boolean) => {
	return isInteriorCleaning ? `@₹${item?.price} + ₹${interiorCleaningAmount} = ₹${item?.price + interiorCleaningAmount}` : `@₹${item?.price}`
}
