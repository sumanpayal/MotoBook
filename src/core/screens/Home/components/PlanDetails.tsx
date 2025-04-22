import { useTheme } from '@react-navigation/native'
import { PlanDetails1Image, PlanDetails2Image, PlanDetails3Image, PlanDetails4Image, PlanDetails5Image } from '@src/assets/image'
import CustomText from '@src/common/components/Text'
import { scaleHeightPX, scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { Image, View } from 'react-native'
import { createStyles } from '../styles'
import React from 'react'
import { renderTitle } from './DailyCarPlans'

export const PlanDetails = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.planOuter}>
			{renderTitle('Plan Details')}
			<View style={{ gap: scaleHeightPX(10) }}>
				{renderPlanDetailsItem(PlanDetails1Image, 'Police Verified Cleaners')}
				{renderPlanDetailsItem(PlanDetails2Image, '25 Days Exterior Cleaning')}
				{renderPlanDetailsItem(PlanDetails3Image, 'Cleaners Dress Code & ID Card')}
				{renderPlanDetailsItem(PlanDetails4Image, 'Pay At The End Of The Month')}
				{renderPlanDetailsItem(PlanDetails5Image, '24/7 Customer Support')}
			</View>
		</View>
	)
}

const renderPlanDetailsItem = (image: any, title: any) => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.planInner}>
			<Image source={{ uri: image }} style={{ width: scaleWidthPX(27), height: scaleHeightPX(27) }} resizeMode='center' />
			<CustomText>{title}</CustomText>
		</View>
	)
}

export const InteriorCleaning = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.interiorView}>
			<CustomText textType='bold'>
				{'Add 3 days of interior cleaning at just'}
				<CustomText textType='bold' style={{ color: colors.primary }}>
					{' ₹149/month'}
				</CustomText>
			</CustomText>
		</View>
	)
}
