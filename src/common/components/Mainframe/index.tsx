import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderNavigation } from '../HeaderNavigation'
import { useTheme } from '@react-navigation/native'

export default function MainFrame(props: MainFrameProps) {
	const { colors } = useTheme()

	const { children, barStyle = 'light-content', isHeader = false, title = '', backOnPress, isNotifications = false, isBack = true, notificationOnPress, isCustom = false, childrenNav } = props

	return (
		<SafeAreaView edges={['left', 'right', 'top', 'bottom']} style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
			<StatusBar barStyle={barStyle} backgroundColor={'transparent'} translucent />
			{isHeader && <HeaderNavigation title={title} backOnPress={backOnPress} isBack={isBack} isNotifications={isNotifications} notificationOnPress={notificationOnPress} isCustom={isCustom} children={childrenNav} />}
			{children}
		</SafeAreaView>
	)
}
