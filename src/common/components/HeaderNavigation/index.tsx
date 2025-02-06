import React from 'react'
import { Pressable, View } from 'react-native'
import { navigationStyles } from './styles'
import CustomText from '../Text'
import Icon from 'react-native-vector-icons/AntDesign'
import { useTheme } from '@react-navigation/native'

export const HeaderNavigation = (props: HeaderNavigationProps) => {
	const { colors } = useTheme()
	const styles = navigationStyles(colors)

	const { backOnPress, title } = props

	return (
		<View style={styles.container}>
			<View style={styles.leftView}>
				<Pressable onPress={() => backOnPress && backOnPress()}>
					<Icon name='arrowleft' size={28} color={colors.textColor} />
				</Pressable>
				{title && (
					<CustomText textType='semi-bold' style={styles.titleStyle}>
						{title}
					</CustomText>
				)}
			</View>
		</View>
	)
}
