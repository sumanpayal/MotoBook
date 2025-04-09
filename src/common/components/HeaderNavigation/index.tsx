import React from 'react'
import { Pressable, View } from 'react-native'
import { navigationStyles } from './styles'
import CustomText from '../Text'
import { useNavigation, useTheme } from '@react-navigation/native'
import { BackSVG, NotificationsSVG } from '@src/assets/svg'
import { scaleWidthPX } from '@src/common/utils/responsiveStyle'

export const HeaderNavigation = (props: HeaderNavigationProps) => {
	const { colors } = useTheme()
	const styles = navigationStyles(colors)

	const { backOnPress, title, isBack = true, isNotifications = true, isCustom = false, children } = props

	const navigation: any = useNavigation()

	const navigationOnNotification = () => {
		navigation.navigate('Notifications')
	}

	const navigationOnBack = () => {
		if (backOnPress) backOnPress()
		else navigation.goBack()
	}

	return (
		<View style={styles.container}>
			<View style={styles.leftView}>
				{isCustom ? (
					children
				) : (
					<>
						<View style={styles.backView}>
							{isBack && (
								<Pressable onPress={navigationOnBack}>
									<BackSVG />
								</Pressable>
							)}
						</View>
						{title && (
							<CustomText textType='semi-bold' style={styles.titleStyle}>
								{title}
							</CustomText>
						)}
					</>
				)}
			</View>
			<View style={styles.rightView}>
				{isNotifications && (
					<Pressable onPress={navigationOnNotification}>
						<NotificationsSVG width={scaleWidthPX(30)} height={scaleWidthPX(30)} />
					</Pressable>
				)}
			</View>
		</View>
	)
}
