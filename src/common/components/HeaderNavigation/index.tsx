import React from 'react'
import { Pressable, View } from 'react-native'
import { navigationStyles } from './styles'
import CustomText from '../Text'
import { useTheme } from '@react-navigation/native'
import { BackSVG, NotificationsSVG } from '@src/assets/svg'

export const HeaderNavigation = (props: HeaderNavigationProps) => {
	const { colors } = useTheme()
	const styles = navigationStyles(colors)

	const { backOnPress, title, isBack = true, isNotifications = false, notificationOnPress, isCustom = false, children } = props

	return (
		<View style={styles.container}>
			<View style={styles.leftView}>
				{isCustom ? (
					children
				) : (
					<>
						{isBack && (
							<Pressable onPress={() => backOnPress && backOnPress()}>
								<BackSVG />
							</Pressable>
						)}
						{title && (
							<CustomText textType='semi-bold' style={styles.titleStyle}>
								{title}
							</CustomText>
						)}
					</>
				)}
			</View>
			{isNotifications && (
				<Pressable onPress={() => notificationOnPress && notificationOnPress()}>
					<NotificationsSVG />
				</Pressable>
			)}
		</View>
	)
}
