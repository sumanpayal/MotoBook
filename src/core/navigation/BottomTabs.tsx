import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack'
import CustomText from '@src/common/components/Text'
import { createStyles } from './styles'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
	const { colors } = useTheme()
	const styles = createStyles()
	return (
		<Tab.Navigator initialRouteName='First' backBehavior='history' screenOptions={{ headerShown: false, tabBarStyle: styles.tabBarStyle, tabBarHideOnKeyboard: true }}>
			<Tab.Screen
				name='First'
				children={() => <HomeStack />}
				options={{
					headerShown: false,
					tabBarLabelPosition: 'below-icon',
					tabBarLabelStyle: styles.textStyle,
					tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<Icon name='home' size={22} color={colors.inputPlaceholder} />} focusedImage={<Icon name='home' size={22} color={colors.primary} />} />,
					tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='Home' />
				}}
			/>
			<Tab.Screen
				name='Second'
				children={() => <HomeStack />}
				options={{
					headerShown: false,
					tabBarLabelPosition: 'below-icon',
					tabBarLabelStyle: styles.textStyle,
					tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<Icon name='home' size={22} color={colors.inputPlaceholder} />} focusedImage={<Icon name='home' size={22} color={colors.primary} />} />,
					tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='Home' />
				}}
			/>
			<Tab.Screen
				name='Third'
				children={() => <HomeStack />}
				options={{
					headerShown: false,
					tabBarLabelPosition: 'below-icon',
					tabBarLabelStyle: styles.textStyle,
					tabBarIcon: ({ focused }) => <TabIcon focused={focused} normalImage={<Icon name='home' size={22} color={colors.inputPlaceholder} />} focusedImage={<Icon name='home' size={22} color={colors.primary} />} />,
					tabBarLabel: ({ focused }) => <TabLabel focused={focused} title='Home' />
				}}
			/>
		</Tab.Navigator>
	)
}

export default BottomTabs

const TabIcon = React.memo((props: any) => {
	const { focused, normalImage, focusedImage } = props
	return <View>{focused ? focusedImage : normalImage}</View>
})

const TabLabel = React.memo((props: any) => {
	const { focused, title } = props
	const { colors } = useTheme()
	const styles = createStyles()
	return (
		<View style={styles.labelView}>
			<CustomText textType='medium' style={{ ...styles.textStyle, color: focused ? colors.primary : colors.inputPlaceholder }}>
				{title}
			</CustomText>
		</View>
	)
})
