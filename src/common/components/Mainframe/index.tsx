import commonFlexStyles from '@src/common/styles/commonFlexStyles'
import React from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HeaderNavigation } from '../HeaderNavigation'
import { useTheme } from '@react-navigation/native'

export default function MainFrame(props: MainFrameProps) {
	const { colors } = useTheme()

	const { children, barStyle = 'light-content', isHeader = false, title = '', backOnPress } = props

	return (
		<SafeAreaView edges={['left', 'right', 'top', 'bottom']} style={{ ...commonFlexStyles.flex1, backgroundColor: colors.background }}>
			<StatusBar barStyle={barStyle} backgroundColor={'transparent'} translucent />
			{isHeader && <HeaderNavigation title={title} backOnPress={backOnPress} />}
			{children}
		</SafeAreaView>
	)
}
