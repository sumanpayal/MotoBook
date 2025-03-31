import { useTheme } from '@react-navigation/native'
import { Stage1Image, Stage2Image, Stage3Image } from '@src/assets/image'
import { NextStageSVG, SelectedStageSVG, UnSelectedStageSVG } from '@src/assets/svg'
import CustomText from '@src/common/components/Text'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'
import { Image, View } from 'react-native'
import { createStyles } from '../styles'
import React from 'react'
import { renderTitle } from './DailyCarPlans'

export const HowItWorks = () => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.howItWorksOuter}>
			{renderTitle('How It Works')}
			<View style={styles.howItWorksInner}>
				{renderStage(SelectedStageSVG, 'Add Vehicle', Stage1Image)}
				<NextStageSVG />
				{renderStage(SelectedStageSVG, 'Submit Request', Stage2Image)}
				<NextStageSVG />
				{renderStage(UnSelectedStageSVG, 'Our Team will contact you', Stage3Image)}
			</View>
		</View>
	)
}

const renderStage = (SelectedImage: any, label: any, stageImage: any) => {
	const { colors } = useTheme()
	const styles = createStyles(colors)
	return (
		<View style={styles.howItem}>
			<View style={styles.howItemLeft}>
				<CustomText numberOfLines={3} style={styles.howItemText}>
					{label}
				</CustomText>
			</View>
			<Image source={{ uri: stageImage }} style={{ width: scaleWidthPX(99), height: scaleWidthPX(99) }} />
		</View>
	)
}
